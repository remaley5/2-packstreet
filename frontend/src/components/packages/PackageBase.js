import React from 'react';
import { NavLink } from 'react-router-dom';

const PackageBase = ({ packageBase }) => {
    console.log('PACKAGE BASE', packageBase)
    return (
        <>
            <div className={`package-base__header ${packageBase.name}`}>
                <img className='header-image' src={packageBase.headerImage} alt='mailer' />
                <div className='package-base__header-text'>
                    <h1 className='section-header'>
                        {packageBase.name}
                    </h1>
                    <div className='section-description'>
                        {packageBase.description1}
                    </div>
                </div>
            </div>
            <div className='package-base__second-description-section'>
                <img className='product-image' src={packageBase.defaultImage} alt='mailer' />
                <div className='package-base__second-description-section__text'>
                    <h1 className='section-header'>{packageBase.description2Header}</h1>
                    <div className='section-description'>{packageBase.description2}</div>
                    <NavLink to='/design' className='section-button bases'>customize your packaging</NavLink>
                </div>
            </div>
        </>
    )
}

export default PackageBase;
