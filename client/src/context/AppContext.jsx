import { createContext, useEffect, useState } from "react";
import { content } from './content'

export const AppContext = createContext()

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const getInitialLanguage = () => {
    if (typeof window === 'undefined') {
        return 'hu'
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

    return storedLanguage === 'en' || storedLanguage === 'hu' ? storedLanguage : 'hu'
}

export const AppContextProvider = (props) => {

    const [isSideBarOpen, setIsSidebarOpen] = useState(false)
    const [language, setLanguage] = useState(getInitialLanguage)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'hu' : 'en')
    }

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }, [language])

    const copy = content[language]

    const value = {
        isSideBarOpen,
        toggleSidebar,
        language,
        toggleLanguage,
        copy,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}