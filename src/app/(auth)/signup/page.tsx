import useSignup from '@/src/hooks/useSigup';
import SignUpScreen from '@/src/screens/signup';

export default function SignUp() {

  const { control, errors, handleSubmit, isSubmitting, onSubmit } = useSignup()

  return (
    <SignUpScreen
    control={control}
    errors={errors}
    handleSubmit={handleSubmit}
    isSubmitting={isSubmitting}
    onSubmit={onSubmit}
    />
  );
}

