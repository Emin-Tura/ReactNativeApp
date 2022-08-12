export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Gecersiz e-posta adresi';
    case 'auth/email-already-exists':
      return 'Kullanici Zaten Kayitli';
    case 'auth/user-not-found':
      return 'Kullanici Bulunamadi';
    case 'auth/weak-password':
      return 'Parola Yetersiz';
    case 'auth/wrong-password':
      return 'Parola Gecersiz';
    default:
      return errorCode;
  }
}
