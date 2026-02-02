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
} from "@mui/material";

export default function AssessmentPage() {
  const navigate = useNavigate();

  const questions = [
    {
      q: "After washing, how does your skin feel?",
      options: ["Dry / Tight", "Normal", "Oily", "Dry cheeks + oily T-zone"],
    },
    {
      q: "Where do you get oil the most?",
      options: ["T-zone", "Whole face", "Rarely oily"],
    },
    {
      q: "Does your skin get irritated easily?",
      options: ["Yes", "Sometimes", "No"],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const progress = Math.round(((step + 1) / questions.length) * 100);

  const next = () => {
    if (!answers[step]) return toast.error("Please choose an answer ✨");
    setStep((s) => Math.min(s + 1, questions.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const save = () => {
    if (answers.some((a) => !a))
      return toast.error("Please answer all questions 💛");

    const type =
      answers[0] === "Dry / Tight"
        ? "Dry"
        : answers[0] === "Oily"
          ? "Oily"
          : answers[0] === "Dry cheeks + oily T-zone"
            ? "Combination"
            : "Normal";
    localStorage.setItem(
      "skinProfile",
      JSON.stringify({ type, sensitive: answers[2] !== "No" }),
    );

    toast.success("Assessment saved ✅");
    navigate("/routine");
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "grid",
        placeItems: "center",
        p: { xs: 2, md: 4 },
        background:
          "radial-gradient(circle at 15% 20%, rgba(216, 202, 202, 0.95), transparent 55%)," +
          "radial-gradient(circle at 85% 30%, rgba(255,255,255,0.75), transparent 55%)," +
          "linear-gradient(135deg, #f7efe7, #ead7c4)",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "min(1100px, 96vw)",
          minHeight: { xs: "auto", md: 520 },
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 24px 70px rgba(111,78,55,0.22)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={1}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 1000,
                  fontSize: { xs: 26, md: 36 },
                  color: "#3b2a1e",
                }}
              >
                Skin Assessment
              </Typography>
              <Typography sx={{ opacity: 0.75, color: "#3b2a1e" }}>
                Simple questions → personalized routine
              </Typography>
            </Box>

            <Typography sx={{ fontWeight: 900, color: "#6f4e37" }}>
              Step {step + 1} / {questions.length}
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              mt: 2,
              height: 10,
              borderRadius: 999,
              bgcolor: "rgba(244, 107, 9, 0.14)",
              "& .MuiLinearProgress-bar": {
                bgcolor: "#8a5a44",
                borderRadius: 999,
              },
            }}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{ fontWeight: 950, fontSize: 20, color: "#3b2a1e", mb: 2 }}
          >
            {questions[step].q}
          </Typography>

          <RadioGroup
            value={answers[step]}
            onChange={(e) => {
              const copy = [...answers];
              copy[step] = e.target.value;
              setAnswers(copy);
            }}
          >
            {questions[step].options.map((op) => (
              <FormControlLabel
                key={op}
                value={op}
                control={
                  <Radio
                    sx={{
                      color: "rgba(106, 87, 73, 0.55)",
                      "&.Mui-checked": { color: "#8a5a44" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontWeight: 800, color: "#3b2a1e" }}>
                    {op}
                  </Typography>
                }
                sx={{
                  m: 0,
                  mb: 1.4,
                  px: 2,
                  py: 1.4,
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background:
                    "linear-gradient(180deg, rgba(190, 156, 156, 0.96), rgba(66, 38, 38, 0.74))",
                  transition: "0.18s",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 12px 30px rgba(111,78,55,0.14)",
                  },
                }}
              />
            ))}
          </RadioGroup>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mt: 3 }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
            sx={{
              fontWeight: 950,
              borderRadius: 3,
              borderColor: "rgba(111,78,55,0.45)",
              color: "#6f4e37",
              "&:hover": {
                borderColor: "#734735",
                background: "rgba(138,90,68,0.06)",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="outlined"
            onClick={back}
            disabled={step === 0}
            sx={{
              fontWeight: 950,
              borderRadius: 3,
              borderColor: "rgba(111,78,55,0.45)",
              color: "#6f4e37",
              "&:hover": {
                borderColor: "#734735",
                background: "rgba(138,90,68,0.06)",
              },
            }}
          >
            Back
          </Button>

          {step < questions.length - 1 ? (
            <Button
              variant="contained"
              onClick={next}
              sx={{
                flex: 1,
                fontWeight: 1000,
                borderRadius: 3,
                bgcolor: "#d4b3a4",
                "&:hover": { bgcolor: "#4c1e1b" },
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={save}
              sx={{
                flex: 1,
                fontWeight: 1000,
                borderRadius: 3,
                bgcolor: "#8a5a44",
                "&:hover": { bgcolor: "#734735" },
              }}
            >
              Save Results
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
