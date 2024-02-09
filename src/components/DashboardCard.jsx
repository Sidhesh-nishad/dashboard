import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function DashboardCard({ title, data, isLoading }) {
    return (
        <Card sx={{ width: 300, height: 130, borderRadius: 5 }}>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 3,
                }}
            >
                <Typography
                    sx={{ fontSize: 20 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                {!isLoading ? (
                    <Typography
                        sx={{ fontSize: 30 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {data}
                    </Typography>
                ) : (
                    "...loading Data"
                )}
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
