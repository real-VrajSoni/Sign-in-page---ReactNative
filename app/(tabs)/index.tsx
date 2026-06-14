import React from "react";
import {
  
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>✦</Text>
        </View>
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subHeading}>
          Sign in to continue your healthcare journey
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={[styles.label, { marginTop: 18 }]}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>f</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#6D5DF6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  logoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: PRIMARY,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },

  logoText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
  },

  headingContainer: {
    alignItems: "center",
    marginTop: 36,
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
  },

  subHeading: {
    marginTop: 10,
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    width: "85%",
  },

  formContainer: {
    marginTop: 42,
  },

  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 8,
    fontWeight: "600",
  },

  input: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#111827",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 14,
    color: PRIMARY,
    fontWeight: "600",
    fontSize: 14,
  },

  signInButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,

    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
  },

  signInText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 34,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  dividerText: {
    marginHorizontal: 12,
    color: "#9CA3AF",
    fontSize: 13,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },

  socialButton: {
    width: (width - 72) / 3,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  socialIcon: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 38,
  },

  footerText: {
    color: "#6B7280",
    fontSize: 15,
  },

  signUpText: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 15,
  },
});