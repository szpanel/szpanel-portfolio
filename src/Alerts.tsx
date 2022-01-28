import {useState} from "react";
import styled from "styled-components";
import Alert, {Color} from '@material-ui/lab/Alert';
import {makeStyles} from "@material-ui/core";

interface CustomAlert {
    type: Color,
    message: string,
}

const AlertsContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 101;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  margin: 16px;
`

interface AlertsProps {
    alerts: CustomAlert[],
    removeAlert: (alert: CustomAlert) => void,
}

const useStyles = makeStyles({
    alert: {
        fontSize: '1.2rem',
    }
});

export const useAlerts = (): [CustomAlert[], (alert: CustomAlert, removeAfterSeconds?: number) => void, (alert: CustomAlert) => void] => {
    const [alertList, setAlertList] = useState<CustomAlert[]>([]);

    const addAlert = (alert: CustomAlert, removeAfterSeconds?: number) => {
        setAlertList((prev) => [...prev, alert]);
        if (removeAfterSeconds) {
            setTimeout(() => removeAlert(alert), removeAfterSeconds * 1000);
        }
    };

    const removeAlert = (alert: CustomAlert) => setAlertList(prev => [...prev.filter(el => el !== alert)]);
    return [alertList, addAlert, removeAlert];
};

const Alerts = (props: AlertsProps) => {

    const classes = useStyles();

    return <AlertsContainer>{props.alerts.map((alert, idx) =>
        <Alert key={idx}
               className={classes.alert}
               severity={alert.type}
               onClose={() => props.removeAlert(alert)}
        >
            {alert.message}
        </Alert>
    )}
    </AlertsContainer>
};

export default Alerts;
