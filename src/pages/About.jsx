import { site, bio, skills } from '../content/site'
import { experience, education } from '../content/experience'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import PageTransition from '../components/PageTransition'
import { asset } from '../lib/asset'

export default function About() {
  return (
    <PageTransition>
      <div className="page">
        <header className="page-header">
          <Reveal now>
            <h1 className="h1">
              About<span>.</span>
            </h1>
          </Reveal>
        </header>

        <section className="section">
          <div className="about-grid">
            <Reveal now className="about-bio">
              {bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Reveal>
            <div>
              {site.portrait && (
                <Reveal now>
                  <div className="about-portrait">
                    <img src={asset(site.portrait)} alt={site.portraitAlt} />
                  </div>
                </Reveal>
              )}
              {skills.map((block, i) => (
                <Reveal now key={block.group} delay={i * 0.1}>
                  <div className="skills-block">
                    <h3>{block.group}</h3>
                    <div>
                      {block.items.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee />

        <section className="section" style={{ marginTop: 'var(--section-gap)' }}>
          <Reveal>
            <p className="eyebrow">Experience</p>
          </Reveal>
          <div className="timeline">
            {experience.map((row, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="timeline-row">
                  <div>
                    <div className="role">{row.role}</div>
                    <div className="org">{row.org}</div>
                  </div>
                  <div className="note">{row.note}</div>
                  <div className="period">{row.period}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Education</p>
          </Reveal>
          <div className="timeline">
            {education.map((row, i) => (
              <Reveal key={i}>
                <div className="timeline-row">
                  <div>
                    <div className="role">{row.school}</div>
                    <div className="org">{row.program}</div>
                  </div>
                  <div className="note" />
                  <div className="period">{row.period}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
