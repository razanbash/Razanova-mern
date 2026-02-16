import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
  LinearProgress,
  Divider,
} from "@mui/material";
import {
  Spa,
  AutoAwesome,
  WaterDrop,
  FavoriteBorder,
  VerifiedOutlined,
  ArrowForwardIos,
} from "@mui/icons-material";

export default function AssessmentPage() {
  const navigate = useNavigate();

  const questions = [
    {
      q: "After washing, how would you describe your skin texture?",
      options: ["Dry / Tight", "Normal", "Oily", "Dry cheeks + oily T-zone"],
    },
    {
      q: "In which area is sebum production most prominent?",
      options: ["T-zone", "Whole face", "Rarely oily"],
    },
    {
      q: "Does your skin react negatively to environmental changes?",
      options: ["Yes", "Sometimes", "No"],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const progress = Math.round(((step + 1) / questions.length) * 100);

  const next = () => {
    if (!answers[step]) return toast.error("Selection required to proceed");
    setStep((s) => Math.min(s + 1, questions.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const save = () => {
    if (answers.some((a) => !a))
      return toast.error("Please answer all questions 💛");
    const ans0 = answers[0];
    const type =
      ans0 === "Dry / Tight"
        ? "Dry"
        : ans0 === "Oily"
          ? "Oily"
          : ans0 === "Dry cheeks + oily T-zone"
            ? "Combination"
            : "Normal";
    localStorage.setItem(
      "skinProfile",
      JSON.stringify({ type, sensitive: answers[2] !== "No" }),
    );
    toast.success("Analysis Complete ✅");
    navigate("/routine");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 0, md: 4 },
        background: "linear-gradient(135deg, #FAF7F2 0%, #E8D8C3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[
        { I: Spa, t: "8%", l: "10%", s: 120 },
        { I: AutoAwesome, t: "15%", r: "8%", s: 80 },
        { I: WaterDrop, b: "10%", l: "10%", s: 100 },
        { I: FavoriteBorder, b: "12%", r: "12%", s: 90 },
      ].map((icon, i) => (
        <icon.I
          key={i}
          sx={{
            position: "absolute",
            top: icon.t,
            left: icon.l,
            right: icon.r,
            bottom: icon.b,
            fontSize: icon.s,
            color: "#8E735B",
            opacity: 0.12,
            animation: `floatIcon ${6 + i}s ease-in-out infinite alternate`,
            "@keyframes floatIcon": {
              from: { transform: "translateY(0)" },
              to: { transform: "translateY(-30px)" },
            },
          }}
        />
      ))}

      <Paper
        elevation={0}
        sx={{
          width: "min(1100px, 100%)",
          minHeight: { md: 650 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: { xs: 0, md: 2 },
          background: "rgba(255, 255, 255, 0.98)",
          border: "1px solid rgba(142, 115, 91, 0.15)",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "360px" },
            bgcolor: "#8E735B",
            p: 6,
            color: "#FAF7F2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: 5, fontWeight: 900, color: "#E8D8C3" }}
          >
            ANALYSIS PROTOCOL
          </Typography>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ mt: 1, mb: 8, letterSpacing: -2, lineHeight: 1 }}
          >
            Skin
            <br />
            Identity.
          </Typography>

          <Stack spacing={4} sx={{ flex: 1 }}>
            {questions.map((_, i) => (
              <Stack
                key={i}
                direction="row"
                alignItems="center"
                spacing={3}
                sx={{ opacity: step >= i ? 1 : 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    border: "1px solid #E8D8C3",
                    width: 28,
                    height: 28,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    color: "#E8D8C3",
                  }}
                >
                  0{i + 1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, letterSpacing: 2 }}
                >
                  {i === 0 ? "TEXTURE" : i === 1 ? "LIPIDS" : "REACTIVE"}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Box sx={{ pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <VerifiedOutlined sx={{ color: "#E8D8C3", fontSize: 18 }} />
              <Typography
                variant="caption"
                sx={{ fontWeight: 800, letterSpacing: 1, opacity: 0.6 }}
              >
                VERIFIED ASSESSMENT
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#FAF7F2",
          }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: "#8E735B", fontWeight: 900, letterSpacing: 3 }}
            >
              DIAGNOSTIC QUESTION
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "#5C4033",
                mt: 1,
                letterSpacing: -1,
                lineHeight: 1.2,
              }}
            >
              {questions[step].q}
            </Typography>
          </Box>

          <RadioGroup
            value={answers[step]}
            onChange={(e) => {
              const copy = [...answers];
              copy[step] = e.target.value;
              setAnswers(copy);
            }}
          >
            <Stack spacing={2}>
              {questions[step].options.map((op) => {
                const active = answers[step] === op;
                return (
                  <FormControlLabel
                    key={op}
                    value={op}
                    control={<Radio sx={{ display: "none" }} />}
                    label={
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: "100%" }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: "0.9rem",
                            letterSpacing: 0.5,
                          }}
                        >
                          {op.toUpperCase()}
                        </Typography>
                        {active && <ArrowForwardIos sx={{ fontSize: 14 }} />}
                      </Stack>
                    }
                    sx={{
                      m: 0,
                      py: 3,
                      px: 4,
                      borderRadius: 0,
                      border: "1px solid",
                      borderColor: active ? "#8E735B" : "#E8D8C3",
                      bgcolor: active ? "#8E735B" : "#FFF",
                      color: active ? "#FFF" : "#5C4033",
                      transition: "0.2s all ease-in-out",
                      "&:hover": {
                        borderColor: "#8E735B",
                        bgcolor: active ? "#8E735B" : "#F5EFE9",
                        transform: active ? "none" : "translateX(8px)",
                      },
                    }}
                  />
                );
              })}
            </Stack>
          </RadioGroup>

          <Divider sx={{ my: 6, borderColor: "#E8D8C3" }} />

          <Stack direction="row" spacing={3} alignItems="center">
            <Button
              onClick={back}
              disabled={step === 0}
              sx={{
                color: "#8E735B",
                fontWeight: 900,
                letterSpacing: 2,
                "&:disabled": { opacity: 0 },
              }}
            >
              PREVIOUS
            </Button>

            <Box sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 2,
                  bgcolor: "#E8D8C3",
                  "& .MuiLinearProgress-bar": { bgcolor: "#8E735B" },
                }}
              />
            </Box>

            {step < questions.length - 1 ? (
              <Button
                variant="contained"
                onClick={next}
                sx={{
                  bgcolor: "#8E735B",
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  fontWeight: 900,
                  letterSpacing: 2,
                  "&:hover": { bgcolor: "#5C4033" },
                }}
              >
                NEXT
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={save}
                sx={{
                  bgcolor: "#5C4033",
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  fontWeight: 900,
                  letterSpacing: 2,
                  "&:hover": { bgcolor: "#8E735B" },
                }}
              >
                FINALIZE
              </Button>
            )}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
