import React from "react";
import {Avatar, Grid} from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import {Footer, LoggedUser} from "./styled";

const SidebarHeader: React.FC = ({...rest}) => {
    const {_user} = useAppSelector((state) => state.user);
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const initialsIfNoImage = `${_user?.name.charAt(
        0
    )}${_user?.name.charAt(0)}`;

    return (
        <Footer {...rest}>
            <Grid container sx={{pl: 4}}>
                <Grid item md={3} xs={3} pt={1}>
                    <Avatar
                        alt={`${_user?.name}`}
                        src={_user?.image ? `${serverUrl}/storage/${_user.image}` : ""}
                    >
                        {initialsIfNoImage}
                    </Avatar>
                </Grid>
                <Grid item style={{paddingTop: "5px"}} md={4}>
                    {_user && (
                        <Grid container>
                            <Grid item sm={12} xs={12}>
                                <LoggedUser>{_user.name}</LoggedUser>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <LoggedUser>{_user.name}</LoggedUser>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Footer>
    );
};

export default SidebarHeader;
