// App.js - Complete static React website for VAANI Invitation
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="invitation-container">
      {/* Header Section */}
         <div className="header logo-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
           <img className="logo-img aiite-logo" src="/atal.png" alt="AICTE Logo" />
           <img className="logo-img vaani-logo" src="/AICTE.png" alt="VAANI Logo" />
           <img className="logo-img rcciit-logo" src="/rcc.png" alt="RCCIIT Logo" />
         </div>
      {/* Central Invitation Heading */}
      <div style={{ textAlign: 'center', margin: '2.5rem 0', fontSize: '1.35rem', lineHeight: '2.2rem' }}>
        <div style={{ color: 'black',fontWeight: 'bold'}}>৩-দিনব্যাপী</div>
        <div><span style={{ fontSize: '1.2rem', color: 'black',fontWeight: 'bold'}}>AICTE-VAANI</span> প্রযোজিত বাংলা ভাষায় প্রযুক্তি শিক্ষার প্রসারে একটি বিশেষ সেমিনার</div>
        <div style={{ fontSize: '1.7rem', marginTop: '1.2rem', fontWeight: 'bold', color: 'red' }}>অন্বেষণ : The Quest for Knowledge</div>
        <div style={{ fontSize: '1.2rem', color: '#22b3ea' }}>উন্নত কম্পিউটিং (সুপারকম্পিউটিং, কৃত্রিম বুদ্ধিমত্তা, কোয়ান্টাম কম্পিউটিং)</div>
        <div style={{ color: 'red' }}>(অন্বেষণ ২০২৬)</div>
        <div style={{ fontSize: '1rem'}}>আবেদন ক্রমাঙ্ক ২০৩৪৭২৯০৯৮</div>
        <div style={{ marginTop: '1.2rem',color: '#74501aff' }}>অন্বেষণ ২০২৬ - বক্তা হিসেবে উপস্থিতির জন্য আন্তরিক আমন্ত্রণ</div>
      </div>
      {/* Invitation Text */}
      <div className="invitation-text" style={{ fontSize: '1rem', rgin: '2.5rem auto', maxWidth: 900, color: 'black', lineHeight: '2.1rem' }}>
        <p style={{ fontWeight: 'bold', textAlign: 'left' }}>মাননীয় মহাশয়,</p>
        <p>
          আমাদের বিভাগ আয়োজিত <span style={{ fontWeight: 'bold' }}>AICTE-VAANI প্রযোজিত বাংলা ভাষায়</span> প্রযুক্তিগত বিকাশকে উৎসাহিত করার লক্ষ্যে আয়োজিত <span style={{ fontWeight: 'bold' }}>৩ - দিনব্যাপী বিশেষ সেমিনার</span>
          - <span style={{ color: 'red',fontWeight: 'bold'}}>“অন্বেষণ ২০২৬: The Quest for Knowledge”</span> আগামী <span style={{ fontWeight: 'bold' }}>৭ - ৯ জানুয়ারি ২০২৬</span> তারিখে আর সি সি আইআইটি-র বেলেঘাটা ক্যাম্পাসে অনুষ্ঠিত হতে চলেছে।
        </p>
        <p>
         উন্নত কম্পিউটিং-এর বিভিন্ন প্রাসঙ্গিক ক্ষেত্র যেমন <span style={{ fontWeight: 'bold' }}>সুপারকম্পিউটিং, কৃত্রিম বুদ্ধিমত্তা, এবং কোয়ান্টাম কম্পিউটিং</span>-এ বাংলা ভাষায় জ্ঞানচর্চা ও প্রযুক্তিগত
      আলোচনার ক্ষেত্র প্রসারিত করাই এই সেমিনারের মূল লক্ষ্য।
        </p>
        <p>
         এই প্রেক্ষিতে, আপনার মূল্যবান অভিজ্ঞতা, গবেষণা ও দৃষ্টিভঙ্গি আমাদের শিক্ষক, গবেষক ও নবীন প্রযুক্তি-পেশাজীবীদের জন্য অত্যন্ত অনুপ্রেরণাদায়ক হবে। তাই,
      আমরা আপনাকে এই সেমিনারে <span style={{ fontWeight: 'bold' }}>বক্তা হিসেবে আন্তরিক আমন্ত্রণ</span> জানাচ্ছি। আপনার উপস্থিতি অনুষ্ঠানটির মানোন্নয়ন করবে এবং অংশগ্রহণকারীদের
      জ্ঞানভাণ্ডারকে সমৃদ্ধ করবে বলে আমাদের বিশ্বাস।
        </p>
        <p>
          আপনার সদয় সম্মতি পেলে আমরা পরবর্তী সমস্ত আয়োজন সংক্রান্ত তথ্য দ্রুত পাঠিয়ে দেব।
        </p>
      </div>

      {/* Footer - Bengali Text */}
      <div className="footer" style={{ flexDirection: 'column', textAlign: 'left', alignItems: 'flex-start', gap: '0.5rem', marginTop: '1rem',  maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>ধন্যবাদান্তে</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.4rem' }}>অন্বেষণ ২০২৬</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.4rem' }}>আয়োজক কমিটি</div>
        <div style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>তথ্যপ্রযুক্তি বিভাগ</div>
        <div style={{ fontSize: '1rem' }}>আর সি সি ইনস্টিটিউট অফ ইনফরমেশন টেকনোলজি</div>
      </div>
      <div className="footer2" style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'flex-start', gap: '0.5rem', marginTop: '1rem',  maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        প্রচারপত্র: <a href="https://drive.google.com/file/d/1El_vqovvz53hSwvysEhf4CnDrS4nYH3T/view?usp=sharing" target="_blank" rel="noopener noreferrer">View PDF</a>
      </div>
    </div>
  );
};

export default App;
