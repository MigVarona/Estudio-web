import { motion } from "framer-motion"

export default function AnimatedText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Establece el estado inicial de la animación
      animate={{ opacity: 1, y: 0 }} // Establece el estado final de la animación
      transition={{ duration: 0.5 }} // Establece la duración de la transición
      style={{ fontFamily: 'Montserrat', fontSize: '48px', fontWeight: 'bold' }} // Establece el estilo de la fuente
    >
      Animated Text
    </motion.div>
  );
}
