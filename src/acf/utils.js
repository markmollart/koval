export const getComponentData = (data, id) => {
  if (!data || !id) return null;
  const { edges } = data;
  const matchingItem = edges.find(edge => edge.node.id === id);
  return matchingItem ? matchingItem.node : null;
}
