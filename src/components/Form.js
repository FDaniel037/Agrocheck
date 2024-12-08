import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = () => {
    // Aquí puedes procesar los datos y mostrar resultados
    alert('Formulario enviado');

    // Generar PDF con los resultados
    const doc = new jsPDF();
    doc.text('Resultados del análisis ergonómico', 10, 10);
    doc.text(`Nombre: ${formData.name}`, 10, 20);
    doc.save('resultado_ocra.pdf');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Formulario de Análisis</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="border p-2 mb-4 w-full"
      />
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="file"
        name="video"
        onChange={handleFileChange}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  );
};

export default Form;