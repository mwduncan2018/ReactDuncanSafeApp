import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [showSecret, setShowSecret] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecret(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="contact-header">
                <h1 data-cy="pageTitle" style={{ margin: 0 }}>Contact</h1>
                
                <div className="contact-links">
                    <strong data-cy="fullName">Michael Duncan</strong><br />
                    <span data-cy="youtubeLink" id="youtube">
                        <a href="https://www.youtube.com/channel/UC8eQAW3g1Y0mStz-e-WMdKQ" target="_blank" rel="noreferrer">YouTube Channel</a>
                    </span><br />
                    <span data-cy="githubLink" id="github">
                        <a href="https://github.com/mwduncan2018" target="_blank" rel="noreferrer">GitHub</a>
                    </span>
                </div>
            </div>

            <br />
            <div style={{ color: 'var(--contact-skill-header)', fontWeight: 'bold' }}>
                <h4>Skills</h4>
                <ul data-cy="skillList" id="skillList" className="skills-grid">
                    <li>Playwright</li>
                    <li>Robot</li>
                    <li>Cypress</li>
                    <li>Appium</li>
                    <li>Selenium</li>
                    <li>Docker</li>
                    <li>JUnit</li>
                    <li>TestNG</li>
                    <li>pytest</li>
                    <li>pytest-bdd</li>
                    <li>SpecFlow</li>
                    <li>Cucumber</li>
                    <li>C# MVC</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                </ul>
            </div>

            {showSecret && (
                <div id="secretMessage" className="mt-3 alert alert-success">
                    (Duncan Safe Product!)
                </div>
            )}
        </div>
    );
};

export default Contact;