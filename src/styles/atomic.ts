import '../index.css'
import styled from 'styled-components';

export const colors = {
  dark_shade: '#202029',
  light_shade: '#C0C0CC',
  white: '#FFFFFF',
};

export const spacing = {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const fonts = {
    xs: '10px', 
    sm: '12px', 
    md: '14px', 
    lg: '16px', 
    xl: '20px', 
    hl: '28px', 
    regular: 'Roboto',
    medium: 'Roboto',
    semiBold: 'Roboto',
};

export const TitleHighlight = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 600;
    font-size: ${fonts.hl};
`;

export const TagHighlight = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 600;
    font-size: ${fonts.xl};
`;

export const Title = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 500;
    font-size: ${fonts.lg};
`;

export const Tag = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 600;
    font-size: ${fonts.md};
`;

export const DescHighlight = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 500;
    font-size: ${fonts.md};
`;

export const Desc = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 400;
    font-size: ${fonts.md};
`;

export const Info = styled.span`
    color: ${props => props.color || colors.dark_shade};
    font-weight: 400;
    font-size: ${fonts.xs};
`;

export const Line = styled.hr`
    border-bottom-color: ${props => props.color ? `${props.color}` : colors.light_shade};
    border-width: 1px;
`;