import Link from '@mui/material/Link';
import '../IconMedia/IconMedia.css'


function IconMedia({ path, name }) {
    return (
        <Link href="#"
            sx={{
                color: '#777777',
                textDecoration: 'none',
            }}>
            <img src={path} className='footer__mediaicons' alt={name} />
        </Link>
    )
}

export default IconMedia;