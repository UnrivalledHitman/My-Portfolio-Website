import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Radio,
} from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

const ease = [0.22, 1, 0.36, 1];
const education = [
  [
    "2024—2026",
    "Master of Computer Applications",
    "Narula Institute of Technology · Kolkata",
    "CGPA 8.96",
    true,
  ],
  [
    "2021—2024",
    "B.Sc. Computer Science (Hons)",
    "St. Xavier's College · Kolkata",
    "CGPA 6.11 / 10",
    false,
  ],
  [
    "2020—2021",
    "CBSE Class XII · PCM + Computer Science",
    "Air Force Golden Jubilee Institute · New Delhi",
    "94.6%",
    false,
  ],
  [
    "2018—2019",
    "CBSE Class X",
    "Air Force Golden Jubilee Institute · New Delhi",
    "94.6%",
    false,
  ],
];
const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease },
};
function Label({ children }) {
  return (
    <p className="label">
      <span />
      {children}
    </p>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);
  const close = () => setMenu(false);
  return (
    <main>
      <div className="ambient a" />
      <div className="ambient b" />
      <div className="scan" />
      <motion.div className="progress" style={{ scaleX: progress }} />
      <header className="topbar">
        <a className="brand" href="#top">
          <b>IM</b> INDRAJEET<span>_MONDAL</span>
        </a>
        <button
          className={menu ? "toggle is-open" : "toggle"}
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menu ? "nav open" : "nav"}>
          {["education", "work", "research", "mentoring"].map((item, i) => (
            <a key={item} href={`#${item}`} onClick={close}>
              <small>0{i + 1}</small>
              {item}
            </a>
          ))}
          <a
            className="contact"
            href="mailto:indrajeetmondal120703@gmail.com?subject=Portfolio%20enquiry"
          >
            <Mail size={15} /> INITIATE_CONTACT
          </a>
        </nav>
      </header>
      <section id="top" className="hero shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Label>STATUS / AVAILABLE_FOR_COLLABORATION</Label>
          <h1>
            Building intelligence for the <em>real world.</em>
          </h1>
          <p className="lead">
            I&apos;m Indrajeet — an AI/ML engineer and React developer
            translating messy signals into useful, human-centered systems.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              EXPLORE_WORK <ArrowDownRight size={17} />
            </a>
            <a
              className="button ghost"
              href="/indrajeet-mondal-resume.pdf"
              download
            >
              RESUME.PDF <Download size={16} />
            </a>
          </div>
          <div className="location">
            <MapPin size={15} /> KOLKATA, IN <i /> SYSTEMS_ONLINE
          </div>
        </motion.div>
        <motion.div
          className="console"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
        >
          <div className="console-head">
            <span>NEURAL_INTERPRETER / v.26</span>
            <span className="live">LIVE</span>
          </div>
          <div className="radar">
            <i className="ring one" />
            <i className="ring two" />
            <i className="ring three" />
            <i className="beam" />
            <b className="core" />
            <b className="blip x" />
            <b className="blip y" />
            <b className="blip z" />
          </div>
          <div className="console-foot">
            <div>
              <small>FOCUS_VECTOR</small>
              <b>RESEARCH → PRODUCT</b>
            </div>
            <div>
              <small>LATENCY</small>
              <b>04.2 ms</b>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="metrics shell">
        {[
          ["07", "MONTHS", "production engineering at AEITY Systems"],
          [".95", "R²", "Random Forest crop-yield prediction"],
          ["1.2M", "PARAMS", "edge-ready WESAD signal model"],
          ["8.96", "CGPA", "MCA academic performance"],
        ].map(([n, unit, text]) => (
          <div key={unit}>
            <b>
              {n}
              <small>{unit}</small>
            </b>
            <span>{text}</span>
          </div>
        ))}
      </section>
      <section id="education" className="shell section education">
        <motion.div {...reveal} className="heading">
          <Label>01 / ACADEMIC_LOG</Label>
          <h2>
            Learning in <em>layers.</em>
          </h2>
          <p>
            Computer science foundations, now deepening into applied AI, product
            engineering, and research.
          </p>
        </motion.div>
        <div className="timeline">
          {education.map(([year, title, school, mark, current], i) => (
            <motion.article
              {...reveal}
              transition={{ duration: 0.65, delay: i * 0.08, ease }}
              className={`edu ${current ? "current" : ""}`}
              key={year}
            >
              <b className="node">
                {current ? (
                  <GraduationCap size={17} />
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </b>
              <span className="date">
                <CalendarDays size={14} />
                {year}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{school}</p>
              </div>
              <b className="score">{mark}</b>
              {current && <small className="pill">IN PROGRESS</small>}
            </motion.article>
          ))}
        </div>
      </section>
      <section id="work" className="shell section">
        <motion.div {...reveal} className="heading">
          <Label>02 / SELECTED_WORK</Label>
          <h2>
            Production systems, <em>with intent.</em>
          </h2>
        </motion.div>
        <motion.article {...reveal} className="project">
          <div className="card-top">
            <span>PRODUCT_ENGINEERING / AEITY_SYSTEMS</span>
            <span>
              2025 <ArrowUpRight size={14} />
            </span>
          </div>
          <div className="project-main">
            <div>
              <p className="mono">01 — PLATFORM</p>
              <h3>
                One platform.
                <br />
                <em>Two layers of trust.</em>
              </h3>
              <p>
                Led the production website build for AEITY Systems, then brought
                that product discipline into a full-stack application with
                protected routes and secure user access.
              </p>
              <a
                className="inline"
                href="https://aeitys.com"
                target="_blank"
                rel="noreferrer"
              >
                VISIT_AEITY <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="terminal">
              <div>
                <i />
                <i />
                <i />
                <span>aeity.system / secure</span>
              </div>
              <p>
                <small>01</small>
                <b>AUTH</b> <em>verified</em>
              </p>
              <p>
                <small>02</small>identity → <b>granted</b>
              </p>
              <p>
                <small>03</small>route <em>/dashboard</em>
              </p>
              <strong />
            </div>
          </div>
          <div className="tags">
            {[
              "React.js",
              "AWS Amplify",
              "AWS Cognito",
              "REST APIs",
              "Team lead",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </motion.article>
      </section>
      <section id="research" className="research">
        <div className="shell section">
          <motion.div {...reveal} className="heading research-head">
            <Label>03 / RESEARCH_NOTEBOOK</Label>
            <h2>
              Questions worth <em>measuring.</em>
            </h2>
            <p>
              Applied studies where machine learning becomes genuinely useful
              under real-world constraints.
            </p>
          </motion.div>
          <div className="research-grid">
            <motion.article {...reveal} className="research-card">
              <div className="research-top">
                <span>01</span>
                <BrainCircuit size={20} />
              </div>
              <p className="mono">AGRICULTURAL ML</p>
              <h3>
                Robustness of machine learning models in agricultural yield
                prediction.
              </h3>
              <p>
                Tested cleaning pipelines across tree-based ensembles and linear
                baselines. Random Forest reached an R² of 0.950.
              </p>
              <div className="bars">
                {[44, 65, 51, 83, 75, 96].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="data">
                <span>
                  <b>25,938</b> records
                </span>
                <span>
                  <b>61.2%</b> crop importance
                </span>
              </div>
              <a className="inline" href="/crop-yield-research.pdf" download>
                READ_PAPER <Download size={15} />
              </a>
            </motion.article>
            <motion.article
              {...reveal}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="research-card"
            >
              <div className="research-top">
                <span>02</span>
                <Radio size={20} />
              </div>
              <p className="mono">WEARABLE AFFECTIVE COMPUTING</p>
              <h3>Lightweight deep learning for physiological sensor data.</h3>
              <p>
                CNN + BiGRU + attention for WESAD signals, balancing temporal
                insight with edge-device constraints.
              </p>
              <div className="matrix">
                {Array.from({ length: 30 }).map((_, i) => (
                  <i key={i} className={`m${i % 6}`} />
                ))}
              </div>
              <div className="data">
                <span>
                  <b>0.64</b> balanced accuracy
                </span>
                <span>
                  <b>+44%</b> stress F1 lift
                </span>
              </div>
              <a className="inline" href="/wesad-research.pdf" download>
                {/* READ_PAPER <Download size={15} /> */}
              </a>
            </motion.article>
          </div>
        </div>
      </section>
      <section id="mentoring" className="shell section">
        <motion.div {...reveal} className="mentor">
          <div>
            <Label>04 / OPEN_OFFICE_HOURS</Label>
            <h2>
              Good questions make better <em>builders.</em>
            </h2>
          </div>
          <div>
            <p>
              I make time for students and early-career builders who want to
              understand the why behind the work. Reach out for practical
              guidance, a second set of eyes, or a research problem to think
              through together.
            </p>
            <div className="topics">
              <span>
                <BookOpen size={16} /> DBMS
              </span>
              <span>
                <BrainCircuit size={16} /> AI / ML
              </span>
              <span>
                <Globe2 size={16} /> WEB DEV
              </span>
              <span>
                <Radio size={16} /> RESEARCH
              </span>
            </div>
            <a
              className="button primary"
              href="mailto:indrajeetmondal120703@gmail.com?subject=Mentoring%20inquiry"
            >
              START_A_CONVERSATION <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </section>
      <footer className="shell footer">
        <div>
          <Label>TRANSMISSION_CHANNEL_OPEN</Label>
          <a href="mailto:indrajeetmondal120703@gmail.com">
            indrajeetmondal120703@gmail.com <ArrowUpRight />
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/indrajeet-mondal-6bb0b2349"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>
          <a
            href="https://github.com/UnrivalledHitman"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>
          <a
            href="https://aeitys.com"
            target="_blank"
            rel="noreferrer"
            aria-label="AEITY"
          >
            <Globe2 />
          </a>
        </div>
        <p>© 2026 INDRAJEET MONDAL · BUILT IN KOLKATA</p>
      </footer>
    </main>
  );
}
