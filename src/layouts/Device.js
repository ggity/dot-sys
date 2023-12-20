import { Card, Stack } from "@mui/material"

const Device = ({
    children
}) => {
  return (
    <Card
          sx={{
            padding: "3rem 1rem .75rem",
            backgroundColor: "#555",
            borderRadius: "1rem",
          }}
        >
          <Card
            sx={{
              position: "relative",
              height: "100%",
            }}
          >
             <Stack spacing={2} padding=".5rem 1rem" height="100%">
            {children}
             </Stack>
          </Card>
        </Card>
  )
}

export default Device