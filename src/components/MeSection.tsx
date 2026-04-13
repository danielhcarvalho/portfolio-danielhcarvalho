import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";

export const MeSection = () => {
 
  const socials = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/daniel-henrique-de-carvalho-24166725b/",
      icon: Linkedin,
    },
    {
      name: "Github",
      url: "https://github.com/danielhcarvalho",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/danhcv_/",
      icon: Instagram,
    },
  ];
  return (
    <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0",
        height: "100vh",
        padding: "0 250px",
        margin:0
    }}>
      <motion.p
        className="subtitle"
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "18px",}}

      >
        Olá, eu sou
      </motion.p>
      <motion.h1
        style={{
          fontSize: "75px",
          width: "fit-content",
          fontWeight: 900,
          margin: 0,
          fontFamily: "'Outfit', sans-serif"

        }}
      >
        <span
          style={{ position: "relative", display: "block", overflow: "hidden", lineHeight: 1, margin: 0}}
        >
          <motion.div
            animate={{ x: ["0%", "200%"] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(to right, #22c55e, #a855f7)",
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          />
          DANIEL HENRIQUE
        </span>
        <span
          style={{ position: "relative", 
            display: "block", 
            overflow: "hidden", 
            lineHeight: 1,     
            background: "linear-gradient(to left, #a855f7, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",}}
        >
          <motion.div
            animate={{ x: ["0%", "200%"] }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(to right, #22c55e, #a855f7)",
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          />
          DE CARVALHO
        </span>
      </motion.h1>

      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: "20px" }}
        className="subtitle"
      >
        Desenvolvedor
      </motion.p>
      <motion.a
        id="email"
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.6 }}
        whileHover={{ textDecoration: "underline" }}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=danhcv.alves@gmail.com&su=Contato%20via%20portf%C3%B3lio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none",
          color: "rgb(2, 198, 2)"
         }}
      >
        danhcv.alves@gmail.com
      </motion.a>
      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.65 }}
        style={{ margin: "2px 0 10px 0" }}
        className="subtitle"
      >
        Belo Horizonte, Minas Gerais
      </motion.p>
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.7 }} 
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        {socials.map(({ icon: Icon, url, name }) => (
          <motion.a
            key={name}
            href={url}
            whileHover={{
              color: "rgb(2, 198, 2)",
              borderColor: "rgb(2, 198, 2)"
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            style={{ 
              border: "solid 1px white",
              padding: "10px",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
             }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
