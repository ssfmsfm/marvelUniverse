import React from "react";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type PaginationProps = {
    count: number;
    page: number;
    pageSize: number;
    handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const theme = createTheme({
    palette: {
        secondary: {
            main: "#a8a8a8",
        },
    },
});

const CustomPagination: React.FC<PaginationProps> = ({
    count,
    page,
    pageSize,
    handleChangePage,
}) => {
    return (
        <Stack spacing={2}>
            <ThemeProvider theme={theme}>
                <Pagination
                    className="pagination"
                    color="secondary"
                    size="small"
                    page={page}
                    count={Math.ceil(count / pageSize)}
                    onChange={handleChangePage}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </ThemeProvider>
        </Stack>
    );
};

export default CustomPagination;
