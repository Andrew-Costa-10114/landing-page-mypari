import { Link } from 'react-router-dom'
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TikTokOutlined,
  XOutlined,
} from '@ant-design/icons'

const social = [
  {
    href: 'https://www.instagram.com/',
    label: 'MyPari on Instagram',
    Icon: InstagramOutlined,
  },
  {
    href: 'https://www.facebook.com/',
    label: 'MyPari on Facebook',
    Icon: FacebookOutlined,
  },
  {
    href: 'https://www.youtube.com/',
    label: 'MyPari on YouTube',
    Icon: YoutubeOutlined,
  },
  {
    href: 'https://www.tiktok.com/',
    label: 'MyPari on TikTok',
    Icon: TikTokOutlined,
  },
  {
    href: 'https://x.com/',
    label: 'MyPari on X',
    Icon: XOutlined,
  },
]

export default function Footer() {
  return (
    <footer className="jb-footer">
      <div className="jb-footer__inner">
        <div className="jb-footer__top">
          <div className="jb-footer__col jb-footer__col--brand">
            <Link to="/" className="jb-logo jb-logo--footer" aria-label="MyPari home">
              <img
                className="jb-logo__img"
                src="/logo-mypari.png"
                alt=""
                width={300}
                height={81}
              />
            </Link>
            <p className="jb-footer__tagline">MyPari — a social peer-to-peer prediction market.</p>
            <div className="jb-footer__social">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="jb-footer__col">
            <h4>Navigate</h4>
            <ul>
              <li>
                <Link to="/#why-my-pari">Why MyPari</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="jb-footer__col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#responsible">Responsible participation</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="jb-footer__bottom">
          <p>
            © {new Date().getFullYear()} MyPari. Concept demo — not a live real-money
            product. Prediction markets and wagering are regulated; participation
            only where permitted.
          </p>
          <p>
            18+ where applicable • P2P prediction contracts • Escrow &amp; fees per
            product terms • Identity verification &amp; dispute resolution in a full
            product
          </p>
        </div>
      </div>
    </footer>
  )
}
