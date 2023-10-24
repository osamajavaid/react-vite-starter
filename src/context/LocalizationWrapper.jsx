import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enLocale from '../locales/en.json'; // Import English locale
import frLocale from '../locales/fr.json'; // Import English locale
import arLocale from '../locales/ar.json'; // Import Arabic locale

const LocalizationContext = createContext();

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};

export const LocalizationProvider = ({ children }) => {
    // Try to get the locale from localStorage, default to 'en' if not found
    const storedLocale = localStorage.getItem('locale');
    const [locale, setLocale] = useState(storedLocale || 'en');

    const messages = {
        en: enLocale,
        ar: arLocale,
        fr: frLocale,
    };

    const switchLocale = (newLocale) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    // Update the locale when the component mounts
    useEffect(() => {
        switchLocale(locale);
    }, [locale]);

    return (
        <LocalizationContext.Provider value={{ locale, switchLocale }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div dir={dir}>
                    {children}
                </div>
            </IntlProvider>
        </LocalizationContext.Provider>
    );
};