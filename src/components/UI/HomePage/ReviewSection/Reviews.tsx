import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { reviewsData } from "@/utils/StaticData";
import StarRateIcon from "@mui/icons-material/StarRate";

const ReviewCard = () => {
  return (
    <>
      <Container sx={{ margin: "30px auto", mt: 6 }}>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h4"
          component="h4"
        >
          Happy Pet Parents Say!
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {reviewsData.map((review) => (
            <Grid sx={{}} key={review.name}>
              <Card
                sx={{
                  width: "300px",
                  height: "290px",
                }}
              >
                <Box
                  sx={{
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      mt: 3,
                      width: "65px",
                      height: "65px",
                      overflow: "hidden",
                      borderRadius: "50%",
                      border: "1px solid #5533",
                    }}
                  >
                    <Image
                      src={review.image}
                      alt="ceo"
                      height={65}
                      width={65}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {review.name}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {/* <LocationOnIcon /> {review.location} */}

                    <StarRateIcon style={{ fontSize: 25, color: "yellow" }} />
                    <StarRateIcon style={{ fontSize: 25, color: "yellow" }} />
                    <StarRateIcon style={{ fontSize: 25, color: "yellow" }} />
                    <StarRateIcon style={{ fontSize: 25, color: "yellow" }} />
                    <StarRateIcon style={{ fontSize: 25, color: "yellow" }} />
                  </Typography>
                  <Typography
                    sx={{
                      pt: 2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {review.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ReviewCard;
