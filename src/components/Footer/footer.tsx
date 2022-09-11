import GitHubIcon from '../../assets/images/github_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';
import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <h3>Follow me:</h3>
            <div className='social'>
                <a href="https://github.com/eduardorocham" target='_blank'>
                    <div className='social_icon'>
                        <img src={GitHubIcon} alt="" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/eduardo-rocha-553486212/" target='_blank'>
                    <div className='social_icon'>
                        <img src={LinkedinIcon} alt="" />
                    </div>
                </a>
            </div>
            <div className='footer_info'>
                Developed by <a href="https://github.com/eduardorocham" target="_blank "><span>Eduardo Rocha</span></a>
            </div>
        </footer>
    )
}