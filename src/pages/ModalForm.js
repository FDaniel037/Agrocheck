import React, { useState } from "react";
import "./ModalForm.css";

export function ModalForm({ onClose }) {
  const [isUploadVideo, setIsUploadVideo] = useState(true); // Manejo de vista para determinar opción

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>OCRA Checklist - Subir Datos</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <div className="modal-body">
          {/* Opciones para el formulario */}
          <div className="option-selector">
            <button
              className={isUploadVideo ? "active" : ""}
              onClick={() => setIsUploadVideo(true)}
            >
              Subir Video
            </button>
            <button
              className={!isUploadVideo ? "active" : ""}
              onClick={() => setIsUploadVideo(false)}
            >
              Escribir Datos Manuales
            </button>
          </div>

          {isUploadVideo ? (
            <form className="form-container">
              <label htmlFor="video-upload">Sube tu video:</label>
              <input
                type="file"
                id="video-upload"
                accept="video/*"
              />
              <button type="submit" className="submit-btn">Enviar Video</button>
            </form>
          ) : (
            <form className="form-container">
              <label htmlFor="repetitive-movements">Movimientos Repetitivos:</label>
              <input
                type="number"
                id="repetitive-movements"
                placeholder="Cantidad de movimientos"
              />
              <label htmlFor="force-exertion">Nivel de fuerza:</label>
              <input
                type="number"
                id="force-exertion"
                placeholder="Nivel de esfuerzo (0-10)"
              />
              <button type="submit" className="submit-btn">Enviar Datos</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
