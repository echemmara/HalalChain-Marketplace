import React, { useState } from 'react';

const CertificationPage = () => {
    const [certifications, setCertifications] = useState([
        { id: 1, name: 'Halal Authority', status: 'Verified' },
    ]);

    return (
        <div className="certification-page">
            <h2>Certification Integration</h2>
            <ul>
                {certifications.map(cert => (
                    <li key={cert.id}>
                        {cert.name} - {cert.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CertificationPage;
