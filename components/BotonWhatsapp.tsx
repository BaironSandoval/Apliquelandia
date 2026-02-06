type BotonWhatsappProps = {
  servicio: string;
  className?: string;
};

export default function BotonWhatsapp({
  servicio,
  className,
}: BotonWhatsappProps) {
  const telefono = "573209908045";
  const mensaje = `Hola, estoy interesad@ en su servicio de ${servicio}`;
  const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
      <button className={className}>Contratar</button>
    </a>
  );
}
