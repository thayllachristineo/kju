import { FC } from 'react';

import * as Styled from './styles';

import RegistrationCard from '../RegistrationCard';
import {
  Registration,
  RegistrationStatus,
} from '~/types/registration';

const allColumns = [
  {
    status: RegistrationStatus.REVIEW,
    title: 'Pronto para revisar',
  },
  {
    status: RegistrationStatus.APPROVED,
    title: 'Aprovado',
  },
  {
    status: RegistrationStatus.REPROVED,
    title: 'Reprovado',
  },
];

type Props = {
  registrations?: Registration[] | null;
  fetchRegistrations: () => Promise<void>;
  isLoading: boolean;
  shouldShowSkeleton: boolean;
};
const Columns: FC<Props> = ({
  registrations,
  fetchRegistrations,
  isLoading,
  shouldShowSkeleton,
}) => {
  const statuses: Record<
    (typeof allColumns)[number]['status'],
    any
  > = {
    [RegistrationStatus.REVIEW]: {
      backgroundColor: '#FDF8E9',
      color: '#EFC24D',
    },
    [RegistrationStatus.APPROVED]: {
      backgroundColor: '#EEEEFD',
      color: '#4242DF',
    },
    [RegistrationStatus.REPROVED]: {
      backgroundColor: '#FBEDF6',
      color: '#CE2893',
    },
  };

  return (
    <Styled.Container>
      {allColumns.map(({ title, status }) => {
        return (
          <Styled.Column key={title} {...statuses[status]}>
            <>
              <Styled.TitleColumn {...statuses}>
                {title}
              </Styled.TitleColumn>
              <Styled.ColumnContent>
                {registrations
                  ?.filter(
                    (registration) =>
                      registration.status === status,
                  )
                  .map((registration) => {
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        onMutation={fetchRegistrations}
                        isLoading={isLoading}
                      />
                    );
                  })}
              </Styled.ColumnContent>
            </>
          </Styled.Column>
        );
      })}
    </Styled.Container>
  );
};
export default Columns;
