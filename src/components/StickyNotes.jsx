
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const notes = [
  {
    id: "one",
    text: "currently exploring\nAI + machine learning ✳",
    icon: "✿",
    tone: "peach",
  },
  {
    id: "two",
    text: "debugging is just\nsolving tiny mysteries",
    icon: "✦",
    tone: "sage",
  },
  {
    id: "three",
    text: "made of curiosity\n& a little coffee ☕",
    icon: "♡",
    tone: "yellow",
  },
];



export default function StickyNotes() {
  const containerRef = useRef(null);
  const positionsRef = useRef({});
  const dragRef = useRef(null);

  const [positions, setPositions] = useState({});
  const [ready, setReady] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [hasDragged, setHasDragged] = useState(false);
  // Calculate the original positions of the notes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const anchors = container.querySelectorAll(
      ".sticky-note-anchor"
    );

    const initial = {};

    anchors.forEach((anchor, index) => {
      const rect = anchor.getBoundingClientRect();

      initial[notes[index].id] = {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      };
    });

    positionsRef.current = initial;
    setPositions(initial);
    setReady(true);
  }, []);

  // Track dragging at window level, not container level.
  useEffect(() => {
    const handleMove = (e) => {
      const drag = dragRef.current;

      if (!drag || e.pointerId !== drag.pointerId) return;
      setHasDragged(true);
      const next = {
        x: drag.x + e.clientX - drag.startX,
        y: drag.y + e.clientY - drag.startY,
      };

      positionsRef.current = {
        ...positionsRef.current,
        [drag.id]: next,
      };

      setPositions(positionsRef.current);
    };

    const handleStop = (e) => {
      if (dragRef.current?.pointerId !== e.pointerId) return;

      dragRef.current = null;
      setActiveId(null);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleStop);
    window.addEventListener("pointercancel", handleStop);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleStop);
      window.removeEventListener("pointercancel", handleStop);
    };
  }, []);

  const startDrag = (e, id) => {
    if (e.button !== 0) return;

    e.preventDefault();

    const current = positionsRef.current[id];

    dragRef.current = {
      id,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      x: current.x,
      y: current.y,
    };

    setActiveId(id);
  };

  return (
    <>
      {/* Original layout space */}
      <div className="sticky-notes-wrapper">
  <div
    ref={containerRef}
    className="sticky-notes"
    aria-label="Draggable scrapbook notes"
  >
    {notes.map((note) => (
      <div
        key={note.id}
        className="sticky-note-anchor"
      />
    ))}
  </div>

  <p
  className={`sticky-notes-hint ${hasDragged ? "sticky-notes-hint--hidden" : ""}`}
>
  (try dragging the sticky notes around ↗)
</p>
</div>

      {/* Notes rendered outside all portfolio sections */}
      {ready &&
        createPortal(
          <div className="sticky-notes-portal">
            {notes.map((note) => (
              <div
                key={note.id}
                className={`sticky-note sticky-note--${note.tone}`}
                style={{
                  position: "absolute",
                  left: positions[note.id]?.x ?? 0,
                  top: positions[note.id]?.y ?? 0,
                  transform: `rotate(${
                    note.id === "two" ? 3 : -3
                  }deg)`,
                  zIndex: activeId === note.id ? 10001 : 1000,
                }}
                onPointerDown={(e) =>
                  startDrag(e, note.id)
                }
                title="Drag me anywhere!"
              >
                <span className="sticky-note__pin">●</span>
                <span className="sticky-note__icon">
                  {note.icon}
                </span>
                <span>{note.text}</span>
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
