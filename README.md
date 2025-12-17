# 📚 Library Mobile Application (LMA)

A comprehensive mobile library management solution designed specifically for NED University of Engineering and Technology. This final year project delivers a native experience with delightful animations, smooth transitions, and an intuitive interface, enabling students and faculty to access library services anytime, anywhere.

## Project Team

**Group Leader:**
- Roohana (SE-054)

**Group Members:**
- Ariba Asif (SE-059)
- Unaiza Afridi (SE-078)

**Developed as Final Year Project at NED University of Engineering & Technology**

## Abstract

The Library Mobile Application (LMA) is designed and developed to manage all in-house functions of NED University Library. Traditional desktop applications have slow work progress and cannot generate fast reports. This mobile application completely automates library activities, allowing users to access information through their Android devices without computers or librarians, saving time and energy. The application retrieves information stored in the library database through the library server and is exclusively accessible to NED University students and faculty.

## Targeted Problems

Our research identified several critical issues with the existing library system:

- ❌ Library portal cannot be accessed from home
- ❌ Difficulty checking availability of related books
- ❌ Unable to find book details, authors, and latest editions
- ❌ No way to locate books within the library
- ❌ Limited access to research papers
- ❌ Users forget book return dates
- ❌ Must visit library physically to renew books
- ❌ Lack of library information, timings, and staff availability
- ❌ No way to check if library is open or closed

## Solutions Through LMA

Our application addresses all these challenges:

- ✅ **Remote Access**: Access library portal services from home comfort
- ✅ **Real-time Availability**: Check book availability anytime, anywhere
- ✅ **Complete Information**: Detailed book information including author and edition
- ✅ **Book Tracking**: Locate exact position of books in the library
- ✅ **E-Resources**: Easy downloading of university-paid electronic resources
- ✅ **Smart Notifications**: Automated reminders for book returns before deadline
- ✅ **Online Renewal**: Renew books without visiting the library
- ✅ **Library Details**: Access to operating hours and staff availability

## Target Users

### Students
- Primary target audience: NED University students
- Access application from home, university classes, or cafeteria
- Convenient 24/7 access to library resources

### Faculty Members
- Provide research assignments and book recommendations
- Access to extensive academic resources
- SMTP server integration for communication

### Library Management
- Maintain and manage database
- Handle user requests efficiently
- Ensure shortlisted books are made available
- Monitor library operations

## Key Features

### Core Functionality
- 🔐 **Secure Login/Sign Up**: Exclusive access for NED students and faculty
- 👤 **User Account Management**: Personalized profiles and preferences
- 📚 **OPAC Integration**: Online Public Access Catalog for comprehensive book searching
- 📖 **E-Books & E-Journals**: Access digital library resources
- 🔄 **Online Book Renewal**: Renew borrowed books remotely
- 📱 **Push Notifications**: Reminders for renewals and important library events
- 💬 **Chat with Librarian**: Direct communication channel with library staff
- 📧 **SMTP Server**: Email notifications for faculty members
- 📑 **Request E-Journals**: Submit requests for specific academic journals
- 📍 **Book Location Tracking**: Find exact location of books in library
- 📊 **Shortage Management**: Efficiently overcome book shortage issues

## Architecture & Code Structure

### Module Distribution

**Module 1 (Roohana):**
- Login/Sign Up system
- User Account management
- OPAC for book searching
- Database integration

**Module 1 (Ariba Asif):**
- Chat with librarian feature
- OPAC for book searching
- Database management
- Notification/SMS system
- Book Renewal functionality

**Module 2 (Unaiza Afridi):**
- SMTP server integration
- E-journal request system

## Tech Stack

### Hardware Components
- PC or laptop with 8GB+ RAM for development
- Android mobile phone for testing

### Software Components

**Language:**
- JavaScript / TypeScript

**Development Environment:**
- Android Studio / VS Code
- React Native CLI / Expo

**Framework:**
- React Native

**Database:**
- Oracle Database

**Additional Technologies:**
- React Navigation for routing
- SMTP Server for email notifications
- Push notification services (Firebase Cloud Messaging)
- Real-time chat integration

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI or Expo CLI
- Android Studio (for Android development)
- Oracle Database access

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/unaiza2000/library_app.git
cd lma-ned
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure database connection**
   - Update `src/config/database.js` with Oracle credentials
   - Ensure connection to NED library database server

4. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. **Run the application**

**Using Expo:**
```bash
expo start
# Scan QR code with Expo Go app or press 'a' for Android, 'i' for iOS
```

**Using React Native CLI:**
```bash
# For Android
npx react-native run-android

# For iOS (Mac only)
npx react-native run-ios
```

### Database Setup
```sql
-- Connect to Oracle Database
-- Import the schema provided in /database folder
sqlplus username/password@database
@database/schema.sql
```

## Research Foundation

Our application improves upon existing solutions by addressing their limitations:

### Analyzed Systems:
1. **Android Application for Online Library Management System (AAOLMS)**
   - Issues: Slow report generation, database maintenance challenges, difficulty in book tracing
   - Our Solution: Optimized queries and real-time tracking

2. **Android User Interface for University Mobile Library**
   - Issues: No administration for librarians, faculty not notified about new arrivals
   - Our Solution: Librarian chat feature, SMTP notifications

3. **Library Management Robotic System**
   - Issues: Cannot work 24/7, high cost
   - Our Solution: Cost-effective mobile solution with 24/7 availability

## Alignment with SDGs & Programme Mission

### Programme Mission Alignment
- ✅ Use Software Engineering technologies to make positive influence on society
- ✅ Offers a platform for library users
- ✅ Use technological advancements to transform user services
- ✅ Stronger online student communities

### Sustainable Development Goals (SDGs)
**Goal 4: Quality Education**
- Provides convenient access to library materials and e-resources
- Promotes equal access to educational resources
- Enhances learning opportunities for all students

## Future Enhancements

### Planned Features
- [ ] **iOS Support**: Expand to iOS devices
- [ ] **Biometric Authentication**: Fingerprint/Face ID login
- [ ] **Offline Mode**: Browse previously viewed content offline
- [ ] **Reading Analytics**: Personal reading statistics and goals
- [ ] **Book Recommendations**: AI-powered suggestions based on history
- [ ] **Digital Library Card**: QR code-based library card
- [ ] **Fine Payment Integration**: Pay library fines through app
- [ ] **Multi-language Support**: Urdu and English language options
- [ ] **Integration with LMS**: Connect with Learning Management System
- [ ] **Event Calendar**: Library events and workshops schedule

### Technical Improvements
- [ ] Implement TypeScript for better type safety
- [ ] Migrate to React Native 0.70+ for latest features
- [ ] Implement comprehensive unit and integration tests (Jest, Detox)
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Optimize app bundle size and performance
- [ ] Implement data encryption for sensitive information
- [ ] Add analytics (Firebase Analytics/Mixpanel)
- [ ] Create admin panel for library staff
- [ ] Implement rate limiting for API calls
- [ ] Add comprehensive error handling and logging
- [ ] Implement code splitting and lazy loading
- [ ] Add Fastlane for automated deployments
- [ ] Optimize images and assets
- [ ] Add end-to-end encryption for chat


## Reference Material

- **React Native Documentation**: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
- **React Navigation**: [https://reactnavigation.org/](https://reactnavigation.org/)
- **Oracle Database**: [https://docs.oracle.com/](https://docs.oracle.com/)
- **Expo Documentation**: [https://docs.expo.dev/](https://docs.expo.dev/)
- **React Native Community**: [https://github.com/react-native-community](https://github.com/react-native-community)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **NED University of Engineering and Technology** for providing the opportunity
- **Final Year Project Supervisor** for guidance and mentorship
- **Library Management Staff** at NED for valuable feedback and support
- **Fellow Students** who participated in testing and provided insights
- **Faculty Members** for their input on features and requirements

## Academic Information

**Institution**: NED University of Engineering and Technology  
**Department**: Software Engineering  
**Project Type**: Final Year Project  
**Academic Year**: 2021-2022

---

<div align="center">

*Empowering Education Through Technology*

**Final Year Project - Software Engineering Department**

</div>
