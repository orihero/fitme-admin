import { SharedProps, useSnackbar } from 'notistack';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/SvgIcon/SvgIcon";
import React, { Fragment, useCallback, useEffect, useState } from "react";


const useNotification = () => {
    const [conf, setConf] = useState<{ msg: string, variant: SharedProps, } | null>();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const action = useCallback((key: number) => (
        <Fragment>
            <IconButton onClick={() => { closeSnackbar(key) }}>
                <CloseIcon />
            </IconButton>
        </Fragment>
    ), [closeSnackbar]);
    useEffect(() => {
        if (conf?.msg) {
            let variant: SharedProps = 'info';
            if (conf.variant) {
                variant = conf.variant;
            }
            enqueueSnackbar(conf.msg, {
                variant,
                autoHideDuration: 5000,
                action
            });
        }
    }, [action, conf, enqueueSnackbar]);
    return [conf, setConf];
};

export default useNotification;