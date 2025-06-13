// Add Experience Entry
document.getElementById('add-experience').addEventListener('click', function() {
    const container = document.getElementById('experience-container');
    const newEntry = document.createElement('div');
    newEntry.className = 'entry-item';
    newEntry.innerHTML = `
        <div class="form-group">
            <label>Company</label>
            <input type="text" class="company" placeholder="Microsoft">
        </div>
        
        <div class="form-group">
            <label>Position</label>
            <input type="text" class="position" placeholder="Senior Developer">
        </div>
        
        <div class="form-group">
            <label>Start Date</label>
            <input type="text" class="startDate" placeholder="Jan 2020">
        </div>
        
        <div class="form-group">
            <label>End Date</label>
            <input type="text" class="endDate" placeholder="Present">
        </div>
        
        <div class="form-group">
            <label>Description</label>
            <textarea class="description" rows="3" placeholder="Responsibilities and achievements..."></textarea>
        </div>
        
        <button class="remove-btn"><i class="fas fa-trash"></i> Remove</button>
    `;
    container.appendChild(newEntry);
    
    // Add event listener to remove button
    newEntry.querySelector('.remove-btn').addEventListener('click', function() {
        container.removeChild(newEntry);
    });
});

// Add Education Entry
document.getElementById('add-education').addEventListener('click', function() {
    const container = document.getElementById('education-container');
    const newEntry = document.createElement('div');
    newEntry.className = 'entry-item';
    newEntry.innerHTML = `
        <div class="form-group">
            <label>Institution</label>
            <input type="text" class="institution" placeholder="Harvard University">
        </div>
        
        <div class="form-group">
            <label>Degree</label>
            <input type="text" class="degree" placeholder="Bachelor of Science">
        </div>
        
        <div class="form-group">
            <label>Field of Study</label>
            <input type="text" class="field" placeholder="Computer Science">
        </div>
        
        <div class="form-group">
            <label>Graduation Year</label>
            <input type="text" class="gradYear" placeholder="2018">
        </div>
        
        <button class="remove-btn"><i class="fas fa-trash"></i> Remove</button>
    `;
    container.appendChild(newEntry);
    
    // Add event listener to remove button
    newEntry.querySelector('.remove-btn').addEventListener('click', function() {
        container.removeChild(newEntry);
    });
});

// Update Preview
document.getElementById('generate-preview').addEventListener('click', updatePreview);

function updatePreview() {
    // Get personal information
    const fullName = document.getElementById('fullName').value || 'John Doe';
    const jobTitle = document.getElementById('jobTitle').value || 'Software Engineer';
    const email = document.getElementById('email').value || 'john.doe@example.com';
    const phone = document.getElementById('phone').value || '(123) 456-7890';
    const location = document.getElementById('location').value || 'New York, NY';
    const summary = document.getElementById('summary').value || 'Experienced software engineer...';
    
    // Get skills
    const skills = document.querySelector('.skill').value || 'JavaScript, React, Node.js';
    const skillsArray = skills.split(',').map(skill => skill.trim());
    
    // Update personal info in preview
    document.querySelector('.resume-name').textContent = fullName;
    document.querySelector('.resume-title').textContent = jobTitle;
    document.querySelector('.contact-info').innerHTML = `
        <div class="contact-item"><i class="fas fa-envelope"></i> ${email}</div>
        <div class="contact-item"><i class="fas fa-phone"></i> ${phone}</div>
        <div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${location}</div>
    `;
    
    // Update summary
    document.querySelector('.resume-section p').textContent = summary;
    
    // Update experience
    const experienceContainer = document.getElementById('experience-container');
    const experienceItems = experienceContainer.querySelectorAll('.entry-item');
    let experienceHTML = '';
    
    experienceItems.forEach(item => {
        const company = item.querySelector('.company').value || 'Company Name';
        const position = item.querySelector('.position').value || 'Position Title';
        const startDate = item.querySelector('.startDate').value || 'Start Date';
        const endDate = item.querySelector('.endDate').value || 'End Date';
        const description = item.querySelector('.description').value || 'Job responsibilities and achievements...';
        
        experienceHTML += `
            <div class="experience-item">
                <div class="item-header">
                    <div class="company">${company}</div>
                    <div class="date">${startDate} - ${endDate}</div>
                </div>
                <div class="position">${position}</div>
                <p>${description}</p>
            </div>
        `;
    });
    
    document.querySelector('.resume-section:nth-child(3)').innerHTML = `
        <h3 class="section-title-resume">Work Experience</h3>
        ${experienceHTML}
    `;
    
    // Update education
    const educationContainer = document.getElementById('education-container');
    const educationItems = educationContainer.querySelectorAll('.entry-item');
    let educationHTML = '';
    
    educationItems.forEach(item => {
        const institution = item.querySelector('.institution').value || 'Institution Name';
        const degree = item.querySelector('.degree').value || 'Degree Name';
        const field = item.querySelector('.field').value || 'Field of Study';
        const gradYear = item.querySelector('.gradYear').value || 'Graduation Year';
        
        educationHTML += `
            <div class="education-item">
                <div class="item-header">
                    <div class="degree">${degree} in ${field}</div>
                    <div class="date">${gradYear}</div>
                </div>
                <div class="institution">${institution}</div>
            </div>
        `;
    });
    
    document.querySelector('.resume-section:nth-child(4)').innerHTML = `
        <h3 class="section-title-resume">Education</h3>
        ${educationHTML}
    `;
    
    // Update skills
    let skillsHTML = '';
    skillsArray.forEach(skill => {
        if (skill) {
            skillsHTML += `<div class="skill-tag">${skill}</div>`;
        }
    });
    
    document.querySelector('.skills').innerHTML = skillsHTML;
}

// Download as Word Document
document.getElementById('download-resume').addEventListener('click', generateWordDocument);

function generateWordDocument() {
    // Get all data
    const fullName = document.getElementById('fullName').value || 'John Doe';
    const jobTitle = document.getElementById('jobTitle').value || 'Software Engineer';
    const email = document.getElementById('email').value || 'john.doe@example.com';
    const phone = document.getElementById('phone').value || '(123) 456-7890';
    const location = document.getElementById('location').value || 'New York, NY';
    const summary = document.getElementById('summary').value || 'Experienced software engineer...';
    
    // Get skills
    const skills = document.querySelector('.skill').value || 'JavaScript, React, Node.js';
    const skillsArray = skills.split(',').map(skill => skill.trim());
    
    // Get experience
    const experienceItems = [];
    document.querySelectorAll('#experience-container .entry-item').forEach(item => {
        experienceItems.push({
            company: item.querySelector('.company').value || 'Company Name',
            position: item.querySelector('.position').value || 'Position Title',
            startDate: item.querySelector('.startDate').value || 'Start Date',
            endDate: item.querySelector('.endDate').value || 'End Date',
            description: item.querySelector('.description').value || 'Job responsibilities and achievements...'
        });
    });
    
    // Get education
    const educationItems = [];
    document.querySelectorAll('#education-container .entry-item').forEach(item => {
        educationItems.push({
            institution: item.querySelector('.institution').value || 'Institution Name',
            degree: item.querySelector('.degree').value || 'Degree Name',
            field: item.querySelector('.field').value || 'Field of Study',
            gradYear: item.querySelector('.gradYear').value || 'Graduation Year'
        });
    });
    
    // Create document using docx
    const { Document, Paragraph, TextRun, HeadingLevel, Packer } = docx;
    
    // Create document
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Header
                new Paragraph({
                    heading: HeadingLevel.HEADING_1,
                    children: [new TextRun({
                        text: fullName,
                        bold: true,
                        size: 28
                    })]
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: jobTitle,
                        bold: true,
                        size: 22,
                        color: "2a5db0"
                    })]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Email: ${email} | Phone: ${phone} | Location: ${location}`,
                            size: 20
                        })
                    ]
                }),
                new Paragraph({ text: "" }),
                
                // Summary
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    children: [new TextRun({
                        text: "Professional Summary",
                        bold: true,
                        size: 22,
                        underline: {}
                    })]
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: summary,
                        size: 20
                    })]
                }),
                new Paragraph({ text: "" }),
                
                // Experience
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    children: [new TextRun({
                        text: "Work Experience",
                        bold: true,
                        size: 22,
                        underline: {}
                    })]
                }),
                ...experienceItems.flatMap(exp => [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: exp.company,
                                bold: true,
                                size: 20
                            }),
                            new TextRun({
                                text: `\t${exp.startDate} - ${exp.endDate}`,
                                bold: true,
                                size: 20
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [new TextRun({
                            text: exp.position,
                            italics: true,
                            size: 20
                        })]
                    }),
                    new Paragraph({
                        children: [new TextRun({
                            text: exp.description,
                            size: 20
                        })]
                    }),
                    new Paragraph({ text: "" })
                ]),
                
                // Education
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    children: [new TextRun({
                        text: "Education",
                        bold: true,
                        size: 22,
                        underline: {}
                    })]
                }),
                ...educationItems.flatMap(edu => [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${edu.degree} in ${edu.field}`,
                                bold: true,
                                size: 20
                            }),
                            new TextRun({
                                text: `\t${edu.gradYear}`,
                                bold: true,
                                size: 20
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [new TextRun({
                            text: edu.institution,
                            size: 20
                        })]
                    }),
                    new Paragraph({ text: "" })
                ]),
                
                // Skills
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    children: [new TextRun({
                        text: "Skills",
                        bold: true,
                        size: 22,
                        underline: {}
                    })]
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: skillsArray.join(', '),
                        size: 20
                    })]
                })
            ]
        }]
    });
    
    // Generate and download the document
    Packer.toBlob(doc).then(blob => {
        saveAs(blob, `${fullName.replace(/\s+/g, '_')}_Resume.docx`);
    });
}

// Initialize with sample data
window.addEventListener('DOMContentLoaded', function() {
    // Set sample data
    document.getElementById('fullName').value = 'John Doe';
    document.getElementById('jobTitle').value = 'Software Engineer';
    document.getElementById('email').value = 'john.doe@example.com';
    document.getElementById('phone').value = '(123) 456-7890';
    document.getElementById('location').value = 'New York, NY';
    document.getElementById('summary').value = 'Experienced software engineer with 5+ years of experience in developing scalable web applications. Skilled in JavaScript, React, Node.js, and cloud technologies. Passionate about creating efficient and user-friendly solutions.';
    
    document.querySelector('.skill').value = 'JavaScript, React, Node.js, Python, SQL, AWS, Agile Methodologies';
    
    // Update preview with sample data
    updatePreview();
});
