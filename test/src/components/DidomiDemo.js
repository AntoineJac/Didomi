import React, { useState, useEffect } from 'react';
import { DidomiSDK } from '@didomi/react';


export default function DidomiDemo(props) {

  let didomiObject;
  let x = true;
  
  window.onload = function () {
    window.onscroll = function () {
      if ((document.body.scrollHeight - document.documentElement.clientHeight) * 0.3 < document.documentElement.scrollTop && x) {
        x = false;
        didomiObject.setUserAgreeToAll();
      }
    };
  };

  const didomiConfig = {  
    app: {
      apiKey: '89a1965c-e470-462e-9467-6132bb46ab94',
      vendors: {
        iab: {
          all: true
        }
      }
    },
    vendors: {
      iab: { // You either choose the option 'all', with optionaly 'exclude', or the 'include' option where you add the vendors manually
        all: true,
      },
      didomi: ['google'],
      custom: [
        {
          id: 'custom-vendor', // Unique ID for the vendor
          name: 'Custom Vendor', // Display name of the vendor
          purposeIds: ['cookies'], // List of purposes that you want to collect consent for, for this vendor
          policyUrl: 'http://www.vendor.com/privacy-policy' // URL to the privacy policy of the vendor
        }
      ]
    },
    languages: {
    enabled: ['en', 'fr'], // List of languages that visitors can use
    default: 'en', // Default language to use if the visitor uses a language that is not enabled
    },
    notice: {
      position: 'popup',
      closeOnScroll: false,
      closeOnScrollThresholdType: 'percent',
      closeOnScrollThreshold: 30,
      textAlignment: 'left',
      learnMorePosition: null,
      logoAlignment: 'flex-start',
    },
    theme: {
      color: '#FF0000', // Principal color used by the SDK
      linkColor: '#FF0000', // Color used for the links in the notice/popup
      font: 'Arial', // Font used by the SDK
      buttons: {
        regularButtons: { // Learn more/disagree/disagree to all buttons.
          backgroundColor: '#eeeeee',
          textColor: '#999999',
          borderColor: 'rgba(34, 34, 34, 0.2)',
          borderWidth: '1px',
          borderRadius: '0px',
        },
        highlightButtons: { // Agree/save/agree to all buttons.
          backgroundColor: '#FF0000',
          textColor: '#ffffff',
          borderColor: '#FF0000',
          borderWidth: '1px',
          borderRadius: '0px',
        }
      }
    }
  }

  function onDidomiReady(didomi) {
    didomiObject = didomi;
  }

  function consentHasChanged(cwtToken) {
    console.log('Didomi Consent Changed - cwtToken : ', cwtToken);
    console.log('Didomi Consent Changed - Is the consent required ? : ', didomiObject.isConsentRequired());
    console.log('Didomi Consent Changed - Do we have the consent for the vendor IAB 1 : ', didomiObject.getUserConsentStatusForVendor(1));
    console.log('Didomi Consent Changed - Do we have the consent for the vendor IAB 1 and the purpose cookies : ', didomiObject.getUserConsentStatus('cookies', 1));
  }


    return (
      <div className="DidomiDemo">
      <h1>Didomi React Demo</h1>
      <DidomiSDK
        iabVersion={2}
        config={didomiConfig}
        gdprAppliesGlobally={true}
        onReady={onDidomiReady}
        onConsentChanged={consentHasChanged}
      />
      <button onClick={() => didomiObject.preferences.show()}>Consent preferences</button>
      <button onClick={() => didomiObject.setUserAgreeToAll()}>Set Agree to All</button>
    </div>
    );
}
