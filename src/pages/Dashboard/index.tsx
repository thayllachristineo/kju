import { useEffect, useState } from 'react';

import * as Styled from './styles';

import Collumns from './components/Columns';
import { SearchBar } from './components/Searchbar';
import {
  getRegistrationByCpf,
  getRegistrations,
} from '~/services/registration';
import { Registration } from '~/types/registration';

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<
    Registration[] | null
  >(null);

  const [isLoading, setIsLoading] = useState(false);

  const shouldShowSkeleton = registrations === null;

  const fetchRegistrations = async ({
    showSkeleton = false,
  } = {}) => {
    if (showSkeleton) setRegistrations(null);
    setIsLoading(true);
    const data = await getRegistrations();
    setRegistrations(data || []);
    setIsLoading(false);
  };

  const fetchRegistrationByCpf = async (cpf: string) => {
    setRegistrations(null);
    setIsLoading(true);
    const data = await getRegistrationByCpf(cpf);
    setRegistrations(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <Styled.Container>
      <SearchBar
        fetchRegistrationByCpf={fetchRegistrationByCpf}
        fetchRegistrations={() =>
          fetchRegistrations({ showSkeleton: true })
        }
      />
      <Collumns
        registrations={registrations}
        fetchRegistrations={fetchRegistrations}
        isLoading={isLoading}
        shouldShowSkeleton={shouldShowSkeleton}
      />
    </Styled.Container>
  );
};
export default DashboardPage;
