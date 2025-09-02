// Simple loading spinner component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
      <span className="ml-2 text-muted-foreground">Searching for books...</span>
    </div>
  );
};

export default LoadingSpinner;