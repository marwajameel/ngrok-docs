'use client';

import React, { useState } from 'react';
import { createBaseAccountSDK, pay } from '@base-org/account';
import { SignInWithBaseButton, BasePayButton } from '@base-org/account-ui/react';

export default function SDNNewsPortal() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [amount, setAmount] = useState('1.00');

  // SDN News برانڈنگ کے ساتھ SDK
  const sdk = createBaseAccountSDK({
    appName: 'SDN News - Support Jamil Ahmed Kalyal',
    appLogoUrl: 'https://base.org/logo.png', // آپ اپنا لوگو یہاں لگا سکتے ہیں
  });

  const handleSupport = async (selectedAmount) => {
    try {
      setPaymentStatus('ادائیگی کا عمل جاری ہے...');
      const { id } = await pay({
        amount: selectedAmount || amount,
        // آپ کا اصل رجسٹرڈ والٹ ایڈریس
        to: '0x1278C1E48e3c9548A5D9F2b16dC27Ed311B0697C', 
        testnet: false // براہِ راست ادائیگی کے لیے اسے 'false' رکھا ہے
      });
      setPaymentStatus(`شکریہ! آپ کی $${selectedAmount} کی سپورٹ موصول ہو گئی۔ ID: ${id}`);
    } catch (error) {
      setPaymentStatus('ادائیگی میں تاخیر یا خرابی۔ براہ کرم دوبارہ کوشش کریں۔');
    }
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      direction: 'rtl',
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* کارڈ ڈیزائن */}
      <div style={{
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        maxWidth: '450px',
        width: '100%'
      }}>
        <h1 style={{ color: '#0052FF', marginBottom: '10px' }}>SDN News</h1>
        <h3 style={{ color: '#333' }}>جمیل احمد کلیال کو سپورٹ کریں</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>آزاد صحافت کی حمایت کے لیے اپنا حصہ ڈالیں</p>
        
        <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />

        {/* ڈومین نیم ڈسپلے */}
        <div style={{
          backgroundColor: '#eef4ff',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#0052FF'
        }}>
          🌐 jamilahmed.base.eth
        </div>

        {/* رقم کے انتخاب کے بٹن */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '25px' }}>
          {['1.00', '5.00', '10.00'].map((val) => (
            <button 
              key={val}
              onClick={() => setAmount(val)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: amount === val ? '2px solid #0052FF' : '1px solid #ccc',
                backgroundColor: amount === val ? '#eef4ff' : '#fff',
                cursor: 'pointer'
              }}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* پیمنٹ بٹنز */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {!isSignedIn ? (
            <SignInWithBaseButton onClick={() => setIsSignedIn(true)} />
          ) : (
            <div style={{ color: '#28a745', fontSize: '14px' }}>✅ والٹ کامیابی سے منسلک ہے</div>
          )}

          <BasePayButton 
            text={`رقم بھیجیں ($${amount})`}
            onClick={() => handleSupport(amount)} 
          />
        </div>

        {paymentStatus && (
          <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#fff3cd',
            borderRadius: '5px',
            fontSize: '13px'
          }}>
            {paymentStatus}
          </div>
        )}

        {/* پروفیشنل فوٹر */}
        <div style={{ marginTop: '30px', fontSize: '11px', color: '#888', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          SDN News: باخبر، ہر لمحہ<br />
          رپورٹ: جمیل احمد کلیال | سرائے عالمگیر
        </div>
      </div>
    </div>
  );
}
