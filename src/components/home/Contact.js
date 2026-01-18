import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [showSecret, setShowSecret] = useState(false);

    // This replaces your contact.js setTimeout logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecret(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1 data-cy="pageTitle">Contact</h1>
            <br />
            <p>
                <span data-cy="fullName">Michael Duncan</span><br />
                <span data-cy="youtubeLink" id="youtube">
                    <a href="https://www.youtube.com/channel/UC8eQAW3g1Y0mStz-e-WMdKQ">YouTube Channel</a>
                </span><br />
                <span data-cy="githubLink" id="github">
                    <a href="https://github.com/mwduncan2018">GitHub</a>
                </span><br />
            </p>

            <br />
            <div style={{ color: 'darkgreen', fontWeight: 'bold' }}>
                <h4>Skills</h4>
                <ul data-cy="skillList" id="skillList">
                    <li>Playwright</li>
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

            {/* The secret message that appears after 2 seconds */}
            {showSecret && (
                <div id="secretMessage" className="mt-3 alert alert-success">
                    (Duncan Safe Product!)
                </div>
            )}
        </div>
    );
};

export default Contact;