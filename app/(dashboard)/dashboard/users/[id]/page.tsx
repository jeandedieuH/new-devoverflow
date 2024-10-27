const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <div>UserDetails for {id}</div>
    </div>
  );
};

export default UserDetails;
