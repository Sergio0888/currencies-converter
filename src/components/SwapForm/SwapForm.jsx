import styles from "./SwapForm.module.scss";
import Typography from "@mui/material/Typography";

const SwapForm = ({data}) => {
    const { result, query } = data;
    return (
        <>
            {result > 0 && <Typography
            className={styles.text}
            variant="h6"
            gutterBottom
            component="p"
        >
           You will receive {result.toFixed(1)} {query.to}
        </Typography>} 
        </>
        
    )
};

export default SwapForm;