import { useState, useRef, useCallback, useEffect } from 'react'

export default function Translator() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Filipino to Baybayin');
    const [selectedLanguageId, setSelectedLanguageId] = useState('baybayin');
    const [translatedText, setTranslatedText] = useState('');
    const rawTextAreaRef = useRef(null);
    const translatedTextAreaRef = useRef(null);
    const [fontClass, setFontClass] = useState('');
    const [tooltip, setTooltip] = useState({ show: false, message: '' });

    const showDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const changeLanguage = (newLanguage, newLanguageId) => {
        setSelectedLanguage(newLanguage);
        setSelectedLanguageId(newLanguageId);
        setDropdownOpen(false);
    }

    const clearText = () => {
        setTranslatedText('');
        if (rawTextAreaRef.current) {
            rawTextAreaRef.current.value = '';
        }
    }

    const showTooltip = (message) => {
        setTooltip({ show: true, message: message });
        setTimeout(() => {
            setTooltip({ show: false, message: '' });
        }, 2100);
    };

    const copyText = () => {
        if (translatedTextAreaRef.current) {
            translatedTextAreaRef.current.select();
            document.execCommand('copy');
            showTooltip("Copied to clipboard!");
        }
    }

    const baybayinTranslate = useCallback((text) => {
        let rawText = text.toLowerCase();

        rawText = rawText.replace(/e/g, "i");
        rawText = rawText.replace(/o/g, "u");

        rawText = rawText.replace(/nang/g, "\u1708\u1705\u1714");
        rawText = rawText.replace(/ning/g, "\u1708\u1712\u1705\u1714");
        rawText = rawText.replace(/neng/g, "\u1708\u1712\u1705\u1714");
        rawText = rawText.replace(/nong/g, "\u1708\u1713\u1705\u1714");
        rawText = rawText.replace(/nung/g, "\u1708\u1713\u1705\u1714");

        rawText = rawText.replace(/nga/g, "\u1705");
        rawText = rawText.replace(/ngi/g, "\u1705\u1712");
        rawText = rawText.replace(/ngu/g, "\u1705\u1713");
        rawText = rawText.replace(/ng/g, "\u1705\u1714");
        // rawText = rawText.replace(/ng/g, "\u1708\u1705\u1714");

        rawText = rawText.replace(/ka/g, "\u1703");
        rawText = rawText.replace(/ga/g, "\u1704");
        rawText = rawText.replace(/ta/g, "\u1706");
        rawText = rawText.replace(/da/g, "\u1707");
        rawText = rawText.replace(/na/g, "\u1708");
        rawText = rawText.replace(/pa/g, "\u1709");
        rawText = rawText.replace(/fa/g, "\u1709");
        rawText = rawText.replace(/ba/g, "\u170A");
        rawText = rawText.replace(/ma/g, "\u170B");
        rawText = rawText.replace(/ya/g, "\u170C");
        rawText = rawText.replace(/ra/g, "\u1707");
        rawText = rawText.replace(/la/g, "\u170E");
        rawText = rawText.replace(/wa/g, "\u170F");
        rawText = rawText.replace(/sa/g, "\u1710");
        rawText = rawText.replace(/ha/g, "\u1711");

        rawText = rawText.replace(/ki/g, "\u1703\u1712");
        rawText = rawText.replace(/gi/g, "\u1704\u1712");
        rawText = rawText.replace(/ti/g, "\u1706\u1712");
        rawText = rawText.replace(/di/g, "\u1707\u1712");
        rawText = rawText.replace(/ni/g, "\u1708\u1712");
        rawText = rawText.replace(/pi/g, "\u1709\u1712");
        rawText = rawText.replace(/bi/g, "\u170A\u1712");
        rawText = rawText.replace(/mi/g, "\u170B\u1712");
        rawText = rawText.replace(/yi/g, "\u170C\u1712");
        rawText = rawText.replace(/ri/g, "\u1707\u1712");
        rawText = rawText.replace(/li/g, "\u170E\u1712");
        rawText = rawText.replace(/wi/g, "\u170F\u1712");
        rawText = rawText.replace(/si/g, "\u1710\u1712");
        rawText = rawText.replace(/hi/g, "\u1711\u1712");

        rawText = rawText.replace(/ku/g, "\u1703\u1713");
        rawText = rawText.replace(/gu/g, "\u1704\u1713");
        rawText = rawText.replace(/tu/g, "\u1706\u1713");
        rawText = rawText.replace(/du/g, "\u1707\u1713");
        rawText = rawText.replace(/nu/g, "\u1708\u1713");
        rawText = rawText.replace(/pu/g, "\u1709\u1713");
        rawText = rawText.replace(/bu/g, "\u170A\u1713");
        rawText = rawText.replace(/mu/g, "\u170B\u1713");
        rawText = rawText.replace(/yu/g, "\u170C\u1713");
        rawText = rawText.replace(/ru/g, "\u1707\u1713");
        rawText = rawText.replace(/lu/g, "\u170E\u1713");
        rawText = rawText.replace(/wu/g, "\u170F\u1713");
        rawText = rawText.replace(/su/g, "\u1710\u1713");
        rawText = rawText.replace(/hu/g, "\u1711\u1713");

        rawText = rawText.replace(/a/g, "\u1700");
        rawText = rawText.replace(/i/g, "\u1701");
        rawText = rawText.replace(/u/g, "\u1702");

        rawText = rawText.replace(/k/g, "\u1703\u1714");
        rawText = rawText.replace(/c/g, "\u1703\u1714");
        rawText = rawText.replace(/q/g, "\u1703\u1714");
        rawText = rawText.replace(/g/g, "\u1704\u1714");
        rawText = rawText.replace(/t/g, "\u1706\u1714");
        rawText = rawText.replace(/d/g, "\u1707\u1714");
        rawText = rawText.replace(/n/g, "\u1708\u1714");
        rawText = rawText.replace(/p/g, "\u1709\u1714");
        rawText = rawText.replace(/f/g, "\u1709\u1714");
        rawText = rawText.replace(/v/g, "\u170A\u1714");
        rawText = rawText.replace(/b/g, "\u170A\u1714");
        rawText = rawText.replace(/m/g, "\u170B\u1714");
        rawText = rawText.replace(/y/g, "\u170C\u1714");
        rawText = rawText.replace(/r/g, "\u1707\u1714");
        rawText = rawText.replace(/l/g, "\u170E\u1714");
        rawText = rawText.replace(/w/g, "\u170F\u1714");
        rawText = rawText.replace(/s/g, "\u1710\u1714");
        rawText = rawText.replace(/x/g, "\u1710\u1714");
        rawText = rawText.replace(/z/g, "\u1710\u1714");
        rawText = rawText.replace(/h/g, "\u1711\u1714");
        rawText = rawText.replace(/j/g, "\u1711\u1714");

        setFontClass('baybayin');
        return rawText;
    }, [])

    const hanunooTranslate = useCallback((text) => {
        let rawText = text.toLowerCase();

        rawText = rawText.replace(/o/g, "u");
        rawText = rawText.replace(/e/g, "i");

        rawText = rawText.replace(/nga/g, "\u1725");
        rawText = rawText.replace(/ngi/g, "\u1725\u1732");
        rawText = rawText.replace(/ngu/g, "\u1725\u1733");
        rawText = rawText.replace(/ng/g, "\u1725\u1734");

        rawText = rawText.replace(/ka/g, "\u1723");
        rawText = rawText.replace(/ga/g, "\u1724");
        rawText = rawText.replace(/ta/g, "\u1726");
        rawText = rawText.replace(/da/g, "\u1727");
        rawText = rawText.replace(/na/g, "\u1728");
        rawText = rawText.replace(/pa/g, "\u1729");
        rawText = rawText.replace(/ba/g, "\u172A");
        rawText = rawText.replace(/ma/g, "\u172B");
        rawText = rawText.replace(/ya/g, "\u172C");
        rawText = rawText.replace(/ra/g, "\u172D");
        rawText = rawText.replace(/la/g, "\u172E");
        rawText = rawText.replace(/wa/g, "\u172F");
        rawText = rawText.replace(/sa/g, "\u1730");
        rawText = rawText.replace(/ha/g, "\u1731");

        rawText = rawText.replace(/ki/g, "\u1723\u1732");
        rawText = rawText.replace(/gi/g, "\u1724\u1732");
        rawText = rawText.replace(/ti/g, "\u1726\u1732");
        rawText = rawText.replace(/di/g, "\u1727\u1732");
        rawText = rawText.replace(/ni/g, "\u1728\u1732");
        rawText = rawText.replace(/pi/g, "\u1729\u1732");
        rawText = rawText.replace(/bi/g, "\u172A\u1732");
        rawText = rawText.replace(/mi/g, "\u172B\u1732");
        rawText = rawText.replace(/yi/g, "\u172C\u1732");
        rawText = rawText.replace(/ri/g, "\u172D\u1732");
        rawText = rawText.replace(/li/g, "\u172E\u1732");
        rawText = rawText.replace(/wi/g, "\u172F\u1732");
        rawText = rawText.replace(/si/g, "\u1730\u1732");
        rawText = rawText.replace(/hi/g, "\u1731\u1732");

        rawText = rawText.replace(/ku/g, "\u1723\u1733");
        rawText = rawText.replace(/gu/g, "\u1724\u1733");
        rawText = rawText.replace(/tu/g, "\u1726\u1733");
        rawText = rawText.replace(/du/g, "\u1727\u1733");
        rawText = rawText.replace(/nu/g, "\u1728\u1733");
        rawText = rawText.replace(/pu/g, "\u1729\u1733");
        rawText = rawText.replace(/bu/g, "\u172A\u1733");
        rawText = rawText.replace(/mu/g, "\u172B\u1733");
        rawText = rawText.replace(/yu/g, "\u172C\u1733");
        rawText = rawText.replace(/ru/g, "\u172D\u1733");
        rawText = rawText.replace(/lu/g, "\u172E\u1733");
        rawText = rawText.replace(/wu/g, "\u172F\u1733");
        rawText = rawText.replace(/su/g, "\u1730\u1733");
        rawText = rawText.replace(/hu/g, "\u1731\u1733");

        rawText = rawText.replace(/k/g, "\u1723\u1734");
        rawText = rawText.replace(/g/g, "\u1724\u1734");

        rawText = rawText.replace(/t/g, "\u1726\u1734");
        rawText = rawText.replace(/d/g, "\u1727\u1734");
        rawText = rawText.replace(/n/g, "\u1728\u1734");
        rawText = rawText.replace(/p/g, "\u1729\u1734");
        rawText = rawText.replace(/b/g, "\u172A\u1734");
        rawText = rawText.replace(/m/g, "\u172B\u1734");
        rawText = rawText.replace(/y/g, "\u172C\u1734");
        rawText = rawText.replace(/r/g, "\u172D\u1734");
        rawText = rawText.replace(/l/g, "\u172E\u1734");
        rawText = rawText.replace(/w/g, "\u172F\u1734");
        rawText = rawText.replace(/s/g, "\u1730\u1734");
        rawText = rawText.replace(/h/g, "\u1731\u1734");

        rawText = rawText.replace(/a/g, "\u1720");
        rawText = rawText.replace(/i/g, "\u1721");
        rawText = rawText.replace(/u/g, "\u1722");

        setFontClass('hanunoo');
        return rawText;
    }, [])

    const buhidTranslate = useCallback((text) => {
        let rawText = text.toLowerCase();

        rawText = rawText.replace(/o/g, "u");
        rawText = rawText.replace(/e/g, "i");

        rawText = rawText.replace(/nga/g, "\u1745");
        rawText = rawText.replace(/ngi/g, "\u1745\u1752");
        rawText = rawText.replace(/ngu/g, "\u1745\u1753");
        rawText = rawText.replace(/ng/g, "");

        rawText = rawText.replace(/ka/g, "\u1743");
        rawText = rawText.replace(/ga/g, "\u1744");
        rawText = rawText.replace(/ta/g, "\u1746");
        rawText = rawText.replace(/da/g, "\u1747");
        rawText = rawText.replace(/na/g, "\u1748");
        rawText = rawText.replace(/pa/g, "\u1749");
        rawText = rawText.replace(/ba/g, "\u174A");
        rawText = rawText.replace(/ma/g, "\u174B");
        rawText = rawText.replace(/ya/g, "\u174C");
        rawText = rawText.replace(/ra/g, "\u174D");
        rawText = rawText.replace(/la/g, "\u174E");
        rawText = rawText.replace(/wa/g, "\u174F");
        rawText = rawText.replace(/sa/g, "\u1750");
        rawText = rawText.replace(/ha/g, "\u1751");

        rawText = rawText.replace(/ki/g, "\u1743\u1752");
        rawText = rawText.replace(/gi/g, "\u1744\u1752");
        rawText = rawText.replace(/ti/g, "\u1746\u1752");
        rawText = rawText.replace(/di/g, "\u1747\u1752");
        rawText = rawText.replace(/ni/g, "\u1748\u1752");
        rawText = rawText.replace(/pi/g, "\u1749\u1752");
        rawText = rawText.replace(/bi/g, "\u174A\u1752");
        rawText = rawText.replace(/mi/g, "\u174B\u1752");
        rawText = rawText.replace(/yi/g, "\u174C\u1752");
        rawText = rawText.replace(/ri/g, "\u174D\u1752");
        rawText = rawText.replace(/li/g, "\u174E\u1752");
        rawText = rawText.replace(/wi/g, "\u174F\u1752");
        rawText = rawText.replace(/si/g, "\u1750\u1752");
        rawText = rawText.replace(/hi/g, "\u1751\u1752");

        rawText = rawText.replace(/ku/g, "\u1743\u1753");
        rawText = rawText.replace(/gu/g, "\u1744\u1753");
        rawText = rawText.replace(/tu/g, "\u1746\u1753");
        rawText = rawText.replace(/du/g, "\u1747\u1753");
        rawText = rawText.replace(/nu/g, "\u1748\u1753");
        rawText = rawText.replace(/pu/g, "\u1749\u1753");
        rawText = rawText.replace(/bu/g, "\u174A\u1753");
        rawText = rawText.replace(/mu/g, "\u174B\u1753");
        rawText = rawText.replace(/yu/g, "\u174C\u1753");
        rawText = rawText.replace(/ru/g, "\u174D\u1753");
        rawText = rawText.replace(/lu/g, "\u174E\u1753");
        rawText = rawText.replace(/wu/g, "\u174F\u1753");
        rawText = rawText.replace(/su/g, "\u1750\u1753");
        rawText = rawText.replace(/hu/g, "\u1751\u1753");

        rawText = rawText.replace(/k/g, "");
        rawText = rawText.replace(/g/g, "");
        rawText = rawText.replace(/t/g, "");
        rawText = rawText.replace(/d/g, "");
        rawText = rawText.replace(/n/g, "");
        rawText = rawText.replace(/p/g, "");
        rawText = rawText.replace(/b/g, "");
        rawText = rawText.replace(/m/g, "");
        rawText = rawText.replace(/y/g, "");
        rawText = rawText.replace(/r/g, "");
        rawText = rawText.replace(/l/g, "");
        rawText = rawText.replace(/w/g, "");
        rawText = rawText.replace(/s/g, "");
        rawText = rawText.replace(/h/g, "");

        rawText = rawText.replace(/a/g, "\u1740");
        rawText = rawText.replace(/i/g, "\u1741");
        rawText = rawText.replace(/u/g, "\u1742");

        setFontClass('buhid');
        return rawText;
    }, [])

    const tagbanwaTranslate = useCallback((text) => {
        let rawText = text.toLowerCase();

        rawText = rawText.replace(/o/g, "u");
        rawText = rawText.replace(/e/g, "i");

        rawText = rawText.replace(/nga/g, "\u1765");
        rawText = rawText.replace(/ngi/g, "\u1765\u1772");
        rawText = rawText.replace(/ngu/g, "\u1765\u1773");
        rawText = rawText.replace(/ng/g, "");

        rawText = rawText.replace(/ka/g, "\u1763");
        rawText = rawText.replace(/ga/g, "\u1764");
        rawText = rawText.replace(/ta/g, "\u1766");
        rawText = rawText.replace(/da/g, "\u1767");
        rawText = rawText.replace(/na/g, "\u1768");
        rawText = rawText.replace(/pa/g, "\u1769");
        rawText = rawText.replace(/ba/g, "\u176A");
        rawText = rawText.replace(/ma/g, "\u176B");
        rawText = rawText.replace(/ya/g, "\u176C");
        rawText = rawText.replace(/ra/g, "");
        rawText = rawText.replace(/la/g, "\u176E");
        rawText = rawText.replace(/wa/g, "\u176F");
        rawText = rawText.replace(/sa/g, "\u1770");
        rawText = rawText.replace(/ha/g, "");

        rawText = rawText.replace(/ki/g, "\u1763\u1772");
        rawText = rawText.replace(/gi/g, "\u1764\u1772");
        rawText = rawText.replace(/ti/g, "\u1766\u1772");
        rawText = rawText.replace(/di/g, "\u1767\u1772");
        rawText = rawText.replace(/ni/g, "\u1768\u1772");
        rawText = rawText.replace(/pi/g, "\u1769\u1772");
        rawText = rawText.replace(/bi/g, "\u176A\u1772");
        rawText = rawText.replace(/mi/g, "\u176B\u1772");
        rawText = rawText.replace(/yi/g, "\u176C\u1772");
        rawText = rawText.replace(/ri/g, "");
        rawText = rawText.replace(/li/g, "\u176E\u1772");
        rawText = rawText.replace(/wi/g, "\u176F\u1772");
        rawText = rawText.replace(/si/g, "\u1770\u1772");
        rawText = rawText.replace(/hi/g, "");

        rawText = rawText.replace(/ku/g, "\u1763\u1773");
        rawText = rawText.replace(/gu/g, "\u1764\u1773");
        rawText = rawText.replace(/tu/g, "\u1766\u1773");
        rawText = rawText.replace(/du/g, "\u1767\u1773");
        rawText = rawText.replace(/nu/g, "\u1768\u1773");
        rawText = rawText.replace(/pu/g, "\u1769\u1773");
        rawText = rawText.replace(/bu/g, "\u176A\u1773");
        rawText = rawText.replace(/mu/g, "\u176B\u1773");
        rawText = rawText.replace(/yu/g, "\u176C\u1773");
        rawText = rawText.replace(/ru/g, "");
        rawText = rawText.replace(/lu/g, "\u176E\u1773");
        rawText = rawText.replace(/wu/g, "\u176F\u1773");
        rawText = rawText.replace(/su/g, "\u1770\u1773");
        rawText = rawText.replace(/hu/g, "");

        rawText = rawText.replace(/k/g, "");
        rawText = rawText.replace(/g/g, "");
        rawText = rawText.replace(/t/g, "");
        rawText = rawText.replace(/d/g, "");
        rawText = rawText.replace(/n/g, "");
        rawText = rawText.replace(/p/g, "");
        rawText = rawText.replace(/b/g, "");
        rawText = rawText.replace(/m/g, "");
        rawText = rawText.replace(/y/g, "");
        rawText = rawText.replace(/r/g, "");
        rawText = rawText.replace(/l/g, "");
        rawText = rawText.replace(/w/g, "");
        rawText = rawText.replace(/s/g, "");
        rawText = rawText.replace(/h/g, "");

        rawText = rawText.replace(/a/g, "\u1760");
        rawText = rawText.replace(/i/g, "\u1761");
        rawText = rawText.replace(/u/g, "\u1762");

        setFontClass('tagbanwa');
        return rawText;
    }, [])

    const convertText = useCallback(() => {
        if (rawTextAreaRef.current) {
            const rawText = rawTextAreaRef.current.value;
            let translation = '';
            switch(selectedLanguageId) {
                case 'baybayin':
                    translation = baybayinTranslate(rawText);
                    break;
                case 'hanunoo':
                    translation = hanunooTranslate(rawText);
                    break;
                case 'buhid':
                    translation = buhidTranslate(rawText);
                    break;
                case 'tagbanwa':
                    translation = tagbanwaTranslate(rawText);
                    break;
                default:
                    translation = 'Translation not available.';
            }
            setTranslatedText(translation);
        }
    }, [baybayinTranslate, hanunooTranslate, buhidTranslate, tagbanwaTranslate, selectedLanguageId]);

    useEffect(() => {
        if (rawTextAreaRef.current && rawTextAreaRef.current.value) {
            convertText();
        }
    }, [selectedLanguageId, convertText])

    return (
        <>
            <div id='languageSwitch' className='flex-jcc switch border-bottom'>
                <div className='translator-main-switch flex-jcc'>
                    <div className='dropdown'>
                        <button id='dropdownButton' onClick={showDropdown} className='dropdown-button'>
                            <div id='languageSelector'>
                                <h3 id='languageSelected'>{selectedLanguage}</h3>
                                <span className='caret-icon'>
                                    <svg version='1.1' id='Layer_1' width='10' height='10' viewBox='0 0 20 20' style={{ enableBackground: 'new 0 0 20 20' }} xmlSpace='preserve'>
                                        <path fill='#2f283f' d='M19.5,5.7L19.5,5.7c-0.8-1.1-2.3-1.3-3.4-0.5L10,9.8L3.9,5.2C2.8,4.4,1.3,4.6,0.5,5.7l0,0C-0.3,6.8-0.1,8.3,1,9.1l7.5,5.7
                                            c0.5,0.3,1,0.5,1.5,0.5c0.5,0,1.1-0.1,1.5-0.5L19,9.1C20.1,8.3,20.3,6.8,19.5,5.7z'></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {dropdownOpen && (
                            <div id='dropdownContents' className={`dropdown-contents ${dropdownOpen ? 'show' : ''}`}>
                                <a onClick={() => changeLanguage('Filipino to Baybayin', 'baybayin')} id="baybayin" className={selectedLanguageId === 'baybayin' ? 'selected' : ''}>Filipino to Baybayin</a>
                                <a onClick={() => changeLanguage('Filipino to Hanunoo', 'hanunoo')} id="hanunoo" className={selectedLanguageId === 'hanunoo' ? 'selected' : ''}>Filipino to Hanunoo</a>
                                <a onClick={() => changeLanguage('Filipino to Buhid', 'buhid')} id="buhid" className={selectedLanguageId === 'buhid' ? 'selected' : ''}>Filipino to Buhid</a>
                                <a onClick={() => changeLanguage('Filipino to Tagbanwa', 'tagbanwa')} id="tagbanwa" className={selectedLanguageId === 'tagbanwa' ? 'selected' : ''}>Filipino to Tagbanwa</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div id='translatorMain' className='translator-main flex-jcc'>
                <div className='translator-main-blocks'>
                    <div className='translator-main-blocks-raw border-right border-bottom'>
                        <label htmlFor='tagalogTextArea'>Filipino</label>
                        <textarea ref={rawTextAreaRef} name='tagalog-text-area' id='tagalogTextArea' placeholder='Type text here' onChange={() => convertText()}></textarea>
                        <button id='clearButton' onClick={clearText} style={{cursor: "pointer"}}>Clear</button>
                    </div>
                    <div className='translator-main-blocks-translated border-bottom'>
                        <label htmlFor='translatedTextArea'>Translation</label>
                        <textarea ref={translatedTextAreaRef} name='translated-text-area' id='translatedTextArea' value={translatedText} className={fontClass} readOnly></textarea>
                        <button id='copyButton' onClick={copyText} style={{cursor: "pointer"}}>Copy</button>
                    </div>
                </div>
            </div>

            <div id='toast' className={tooltip.show ? 'show' : ''}>
                <p>{tooltip.message}</p>
            </div>
        </>
    )
}
