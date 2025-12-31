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
        <div>(অন্বেষণ ২০২৬)</div>
        <div style={{ marginTop: '1.2rem',color: '#74501aff' }}>অন্বেষণ ২০২৬ - বক্তা হিসেবে উপস্থিতির জন্য আন্তরিক আমন্ত্রণ</div>
      </div>
      {/* Invitation Text */}
      <div className="invitation-text" style={{ fontSize: '1rem', rgin: '2.5rem auto', maxWidth: 900, color: 'black', lineHeight: '2.1rem' }}>
        <p style={{ fontWeight: 'bold', textAlign: 'left' }}>মাননীয় মহাশয়,</p>
        <p>
          আিোযের শবভোগ আযয়োজিত AICTE-VAANI প্রন্ব াত্রজত ব্ািংলা ভাষায প্র ুজিগত শবকোিযক উৎসোশহত করোর লযক্ষে আযয়োজিত ৩ - দিনব্যাপী দব্ন্বেষ কসদমনার
          - “অন্বেষণ ২০২৬: The Quest for Knowledge” আগোিী ৭ - ৯ জানুযাদর ২০২৬ তোশরযে আর শস শস আইআইটি-র সবযলঘোিো কেোম্পোযস অনুটিত হযত চযলযে।
        </p>
        <p>
          উন্নত কম্পম্পউটিাং-এর শবশভন্ন প্রোসশিক সক্ষত্র স িন সুপারকম্পিউট িং, কৃত্রিম ব্ুত্রিমত্তা, এবাং ককাযান্টাম কম্পিউট িং-এ বোাংলো ভোষোয় জ্ঞোনচচচো ও প্র ুজিগত
          আযলোচনোর সক্ষত্র প্রসোশরত করোই এই সসশিনোযরর িূল লক্ষে।
        </p>
        <p>
          এই সপ্রশক্ষযত, আপনোর িূলেবোন অশভজ্ঞতো, গযবষণো ও েৃটিভশি আিোযের শিক্ষক, গযবষক ও নবীন প্র ুজি-সপিোিীবীযের িনে অতেন্ত অনুযপ্ররণোেোয়ক হযব। তোই,
          আিরো আপনোযক এই সসশিনোযর ব্ক্তা দিন্বসন্বব্ আন্তদরক আমন্ত্রণ িোনোজি। আপনোর উপশিশত অনুিোনটির িোযনোন্নয়ন করযব এবাং অাংিগ্রহণকোরীযের
          জ্ঞোনভোণ্ডোরযক সিৃদ্ধ করযব বযল আিোযের শবশ্বোস।
        </p>
        <p>
          আপনোর সেয় সম্মশত সপযল আিরো পরবতী সিস্ত আযয়োিন সাংক্রোন্ত তথ্ে দ্রুত পোটিযয় সেব।
        </p>
      </div>

      {/* Footer - Bengali Text */}
      <div className="footer" style={{ flexDirection: 'column', textAlign: 'left', alignItems: 'flex-start', gap: '0.5rem', marginTop: '3rem', paddingTop: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>ধন্যবাদান্তে</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.4rem' }}>অন্বেষণ ২০২৬</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.4rem' }}>আয়োজক কমিটি</div>
        <div style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>তথ্যপ্রযুক্তি বিভাগ</div>
        <div style={{ fontSize: '1rem' }}>আর সি সি ইনস্টিটিউট অফ ইনফরমেশন টেকনোলজি</div>
      </div>
    </div>
  );
};

export default App;
