import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {employmentHistory, IEmploymentHistory} from "./employmentHistory";
import {getYearMonthString} from "../../utils/date";
import {addScrolledIntoViewEventListener} from "../../common/common";
import {Avatar, Box, Divider, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    avatarSize: {
        width: 48,
        height: 48,
    },
    bold: {
        fontWeight: 'bold'
    }
}));

const YEAR_MONTH_SEPARATOR = '.'

const Employment = () => {

    const {t} = useTranslation();

    const classes = useStyles();

    const [shouldAnimateElements, setShouldAnimateElements] = useState<boolean>(false);
    const employmentHistoryRef = useRef<HTMLDivElement>();

    const getEmploymentEndDate = (date: Date) => {
        const now = new Date();
        const tillNow = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
        if (tillNow) {
            return t('employment.employedUntilNow');
        }
        return getYearMonthString(date, YEAR_MONTH_SEPARATOR);
    }

    const sortEmploymentHistoryDescending = (history: IEmploymentHistory[]) =>
        history.sort((el1, el2) => el2.from.getTime() - el1.from.getTime());


    useEffect(() => {
        const unsubscribe = addScrolledIntoViewEventListener(employmentHistoryRef, () => {
            setShouldAnimateElements(true);
            unsubscribe();
        });
        return unsubscribe;
    }, []);

    const getAnimationClassName = (elementIdx: number) => {
        if (shouldAnimateElements) {
            return elementIdx % 2 === 0 ? ' animate__zoomInLeft' : ' animate__zoomInRight';
        }
        return '';
    }

    return (
        <Box paddingTop={2}>
            <Typography variant="h3" gutterBottom>{t('employment.caption')}</Typography>
            <Box
                {...{ref: employmentHistoryRef}}
                flexDirection="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {
                    sortEmploymentHistoryDescending([...employmentHistory]).map(
                        ({
                             projectName
                             , position
                             , iconPath
                             , source
                             , from
                             , to
                         }, idx) =>
                            <Box
                                className={`animate__animated${getAnimationClassName(idx)}`}
                                key={idx}
                                marginY={2}
                                display="flex"
                                alignItems="center"
                            >
                                {
                                    iconPath && (
                                        <Box marginRight={1}>
                                            <Avatar alt={projectName} src={iconPath} className={classes.avatarSize}/>
                                        </Box>
                                    )
                                }
                                <Link href={source}>
                                    <Typography
                                        variant="h5"
                                        className={classes.bold}>
                                        {projectName} - {getYearMonthString(from, YEAR_MONTH_SEPARATOR)} - {getEmploymentEndDate(to)}
                                    </Typography>
                                </Link>
                                <Divider orientation='vertical' variant='middle' flexItem/>
                                <Typography variant="h5">
                                    {position}
                                </Typography>
                            </Box>
                    )
                }
            </Box>

        </Box>
    )
};

export default Employment;
