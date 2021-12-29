import ImgLogo from '../logo.svg'

export const Logo = () => {
    return (
        <img 
            src={ImgLogo} 
            alt="Logo" 
            style={{
                bottom: '20px',
                position: 'fixed',
                right: '20px',
                width: '130px',
            }}
        />
    )
}
