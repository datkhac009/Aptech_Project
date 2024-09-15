import { BrowserRouter as RouterViews, Route, Routes } from 'react-router-dom'

import { Homepage } from '@/pages/Homepage'
import { About } from '@/pages/About'

export const AppRoutes = (props) => {
    const { header, children, footer } = props

    return (
        <RouterViews>
            {header && header}

            <Routes>
                <Route path="*" element={<Homepage />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>

            {
                children && <div className='children-container'>
                    {children}
                </div>
            }

            {footer && footer}
        </RouterViews>
    )
}