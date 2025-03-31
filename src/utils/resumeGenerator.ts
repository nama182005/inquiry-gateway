
import jsPDF from 'jspdf';

interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
  courses: {
    name: string;
    provider: string;
    date: string;
    url: string;
  }[];
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  credentialUrl: string;
  imageUrl?: string;
}

interface UserData {
  name: string;
  email: string;
  university?: string;
  major?: string;
  graduationYear?: string;
  bio?: string;
  skills: Skill[];
  certifications: Certification[];
}

export const generateResume = (userData: UserData): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Set initial position
  let yPos = 20;
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  
  // Add header with user name
  doc.setFontSize(24);
  doc.setTextColor(41, 128, 185); // Blue color
  doc.text(userData.name, pageWidth / 2, yPos, { align: 'center' });
  
  // Add contact information
  yPos += 10;
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text(userData.email, pageWidth / 2, yPos, { align: 'center' });
  
  if (userData.university) {
    yPos += 5;
    const educationText = `${userData.university} ${userData.major ? `• ${userData.major}` : ''}${userData.graduationYear ? ` • Class of ${userData.graduationYear}` : ''}`;
    doc.text(educationText, pageWidth / 2, yPos, { align: 'center' });
  }
  
  // Add bio if available
  if (userData.bio) {
    yPos += 15;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Word wrap for bio text
    const bioLines = doc.splitTextToSize(userData.bio, contentWidth);
    doc.text(bioLines, margin, yPos);
    yPos += (bioLines.length * 5) + 5;
  }
  
  // Add Skills section
  yPos += 10;
  doc.setFontSize(16);
  doc.setTextColor(41, 128, 185);
  doc.text("Skills", margin, yPos);
  
  doc.setDrawColor(220, 220, 220);
  yPos += 1;
  doc.line(margin, yPos, pageWidth - margin, yPos);
  
  yPos += 8;
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  
  // Add each skill
  userData.skills.forEach((skill) => {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(skill.name, margin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Proficiency: ${skill.level}%`, margin + 100, yPos);
    
    yPos += 5;
    
    // Add skill description
    if (skill.description) {
      doc.setFontSize(10);
      const descLines = doc.splitTextToSize(skill.description, contentWidth);
      doc.text(descLines, margin, yPos);
      yPos += (descLines.length * 4) + 2;
    }
    
    // Add courses if any
    if (skill.courses.length > 0) {
      doc.setFontSize(10);
      doc.text("Related Courses:", margin, yPos);
      yPos += 4;
      
      skill.courses.forEach((course) => {
        doc.text(`• ${course.name} (${course.provider}) - ${course.date}`, margin + 5, yPos);
        yPos += 4;
      });
    }
    
    yPos += 5;
  });
  
  // Add Certifications section
  yPos += 10;
  
  // Check if we need a new page for certifications
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.setTextColor(41, 128, 185);
  doc.text("Certifications", margin, yPos);
  
  doc.setDrawColor(220, 220, 220);
  yPos += 1;
  doc.line(margin, yPos, pageWidth - margin, yPos);
  
  yPos += 8;
  
  // Add each certification
  userData.certifications.forEach((cert) => {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(cert.name, margin, yPos);
    
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Issuer: ${cert.issuer}`, margin, yPos);
    
    yPos += 4;
    doc.text(`Issue Date: ${cert.issueDate}${cert.expiryDate ? ` • Expiry: ${cert.expiryDate}` : ''}`, margin, yPos);
    
    yPos += 4;
    doc.text(`Credential ID: ${cert.credentialId}`, margin, yPos);
    
    yPos += 8;
  });
  
  // Save the PDF
  doc.save(`${userData.name.replace(/\s+/g, '_')}_Resume.pdf`);
};
