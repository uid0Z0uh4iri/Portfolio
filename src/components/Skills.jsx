const skills = {
  Frontend: [
    // ... existing frontend skills ...
  ],
  Backend: [
    // ... existing backend skills ...
  ],
  Networking: [
    "LAN",
    "Ubuntu",
    "Firewall",
    "SMTP",
    "POP3/IMAP",
    "Microsoft Exchange Server",
    "Email Security & Encryption",
    "DKIM, SPF, and DMARC Implementation",
    "Postfix",
    "Sendmail",
    "Email Automation",
  ],
  // ... other skill categories ...
};

// ... existing code ...

// Update the card styling in the return statement
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {Object.keys(skills).map((category) => (
    <div
      key={category}
      className="bg-[#171717] p-6 rounded-xl h-full" // Added h-full for consistent height
    >
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills[category].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div> 