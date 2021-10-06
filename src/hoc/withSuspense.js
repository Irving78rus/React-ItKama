import React from 'react'
import Preloader from '../component/Preloader/Preloader'

export const WithSuspense = (Component) => {
 return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
}  
   