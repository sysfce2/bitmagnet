// Code generated by go-enum DO NOT EDIT.
// Version:
// Revision:
// Build Date:
// Built By:

package search

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
	"strings"
)

const (
	OrderDirectionAscending  OrderDirection = "Ascending"
	OrderDirectionDescending OrderDirection = "Descending"
)

var ErrInvalidOrderDirection = fmt.Errorf("not a valid OrderDirection, try [%s]", strings.Join(_OrderDirectionNames, ", "))

var _OrderDirectionNames = []string{
	string(OrderDirectionAscending),
	string(OrderDirectionDescending),
}

// OrderDirectionNames returns a list of possible string values of OrderDirection.
func OrderDirectionNames() []string {
	tmp := make([]string, len(_OrderDirectionNames))
	copy(tmp, _OrderDirectionNames)
	return tmp
}

// OrderDirectionValues returns a list of the values for OrderDirection
func OrderDirectionValues() []OrderDirection {
	return []OrderDirection{
		OrderDirectionAscending,
		OrderDirectionDescending,
	}
}

// String implements the Stringer interface.
func (x OrderDirection) String() string {
	return string(x)
}

// IsValid provides a quick way to determine if the typed value is
// part of the allowed enumerated values
func (x OrderDirection) IsValid() bool {
	_, err := ParseOrderDirection(string(x))
	return err == nil
}

var _OrderDirectionValue = map[string]OrderDirection{
	"Ascending":  OrderDirectionAscending,
	"ascending":  OrderDirectionAscending,
	"Descending": OrderDirectionDescending,
	"descending": OrderDirectionDescending,
}

// ParseOrderDirection attempts to convert a string to a OrderDirection.
func ParseOrderDirection(name string) (OrderDirection, error) {
	if x, ok := _OrderDirectionValue[name]; ok {
		return x, nil
	}
	// Case insensitive parse, do a separate lookup to prevent unnecessary cost of lowercasing a string if we don't need to.
	if x, ok := _OrderDirectionValue[strings.ToLower(name)]; ok {
		return x, nil
	}
	return OrderDirection(""), fmt.Errorf("%s is %w", name, ErrInvalidOrderDirection)
}

// MarshalText implements the text marshaller method.
func (x OrderDirection) MarshalText() ([]byte, error) {
	return []byte(string(x)), nil
}

// UnmarshalText implements the text unmarshaller method.
func (x *OrderDirection) UnmarshalText(text []byte) error {
	tmp, err := ParseOrderDirection(string(text))
	if err != nil {
		return err
	}
	*x = tmp
	return nil
}

var errOrderDirectionNilPtr = errors.New("value pointer is nil") // one per type for package clashes

// Scan implements the Scanner interface.
func (x *OrderDirection) Scan(value interface{}) (err error) {
	if value == nil {
		*x = OrderDirection("")
		return
	}

	// A wider range of scannable types.
	// driver.Value values at the top of the list for expediency
	switch v := value.(type) {
	case string:
		*x, err = ParseOrderDirection(v)
	case []byte:
		*x, err = ParseOrderDirection(string(v))
	case OrderDirection:
		*x = v
	case *OrderDirection:
		if v == nil {
			return errOrderDirectionNilPtr
		}
		*x = *v
	case *string:
		if v == nil {
			return errOrderDirectionNilPtr
		}
		*x, err = ParseOrderDirection(*v)
	default:
		return errors.New("invalid type for OrderDirection")
	}

	return
}

// Value implements the driver Valuer interface.
func (x OrderDirection) Value() (driver.Value, error) {
	return x.String(), nil
}

type NullOrderDirection struct {
	OrderDirection OrderDirection
	Valid          bool
	Set            bool
}

func NewNullOrderDirection(val interface{}) (x NullOrderDirection) {
	err := x.Scan(val) // yes, we ignore this error, it will just be an invalid value.
	_ = err            // make any errcheck linters happy
	return
}

// Scan implements the Scanner interface.
func (x *NullOrderDirection) Scan(value interface{}) (err error) {
	if value == nil {
		x.OrderDirection, x.Valid = OrderDirection(""), false
		return
	}

	err = x.OrderDirection.Scan(value)
	x.Valid = (err == nil)
	return
}

// Value implements the driver Valuer interface.
func (x NullOrderDirection) Value() (driver.Value, error) {
	if !x.Valid {
		return nil, nil
	}
	return x.OrderDirection.String(), nil
}

// MarshalJSON correctly serializes a NullOrderDirection to JSON.
func (n NullOrderDirection) MarshalJSON() ([]byte, error) {
	const nullStr = "null"
	if n.Valid {
		return json.Marshal(n.OrderDirection)
	}
	return []byte(nullStr), nil
}

// UnmarshalJSON correctly deserializes a NullOrderDirection from JSON.
func (n *NullOrderDirection) UnmarshalJSON(b []byte) error {
	n.Set = true
	var x interface{}
	err := json.Unmarshal(b, &x)
	if err != nil {
		return err
	}
	err = n.Scan(x)
	return err
}

const (
	TorrentContentOrderByRelevance   TorrentContentOrderBy = "Relevance"
	TorrentContentOrderByPublishedAt TorrentContentOrderBy = "PublishedAt"
	TorrentContentOrderByUpdatedAt   TorrentContentOrderBy = "UpdatedAt"
	TorrentContentOrderBySize        TorrentContentOrderBy = "Size"
	TorrentContentOrderByFiles       TorrentContentOrderBy = "Files"
	TorrentContentOrderBySeeders     TorrentContentOrderBy = "Seeders"
	TorrentContentOrderByLeechers    TorrentContentOrderBy = "Leechers"
	TorrentContentOrderByName        TorrentContentOrderBy = "Name"
	TorrentContentOrderByInfoHash    TorrentContentOrderBy = "InfoHash"
)

var ErrInvalidTorrentContentOrderBy = fmt.Errorf("not a valid TorrentContentOrderBy, try [%s]", strings.Join(_TorrentContentOrderByNames, ", "))

var _TorrentContentOrderByNames = []string{
	string(TorrentContentOrderByRelevance),
	string(TorrentContentOrderByPublishedAt),
	string(TorrentContentOrderByUpdatedAt),
	string(TorrentContentOrderBySize),
	string(TorrentContentOrderByFiles),
	string(TorrentContentOrderBySeeders),
	string(TorrentContentOrderByLeechers),
	string(TorrentContentOrderByName),
	string(TorrentContentOrderByInfoHash),
}

// TorrentContentOrderByNames returns a list of possible string values of TorrentContentOrderBy.
func TorrentContentOrderByNames() []string {
	tmp := make([]string, len(_TorrentContentOrderByNames))
	copy(tmp, _TorrentContentOrderByNames)
	return tmp
}

// TorrentContentOrderByValues returns a list of the values for TorrentContentOrderBy
func TorrentContentOrderByValues() []TorrentContentOrderBy {
	return []TorrentContentOrderBy{
		TorrentContentOrderByRelevance,
		TorrentContentOrderByPublishedAt,
		TorrentContentOrderByUpdatedAt,
		TorrentContentOrderBySize,
		TorrentContentOrderByFiles,
		TorrentContentOrderBySeeders,
		TorrentContentOrderByLeechers,
		TorrentContentOrderByName,
		TorrentContentOrderByInfoHash,
	}
}

// String implements the Stringer interface.
func (x TorrentContentOrderBy) String() string {
	return string(x)
}

// IsValid provides a quick way to determine if the typed value is
// part of the allowed enumerated values
func (x TorrentContentOrderBy) IsValid() bool {
	_, err := ParseTorrentContentOrderBy(string(x))
	return err == nil
}

var _TorrentContentOrderByValue = map[string]TorrentContentOrderBy{
	"Relevance":   TorrentContentOrderByRelevance,
	"relevance":   TorrentContentOrderByRelevance,
	"PublishedAt": TorrentContentOrderByPublishedAt,
	"publishedat": TorrentContentOrderByPublishedAt,
	"UpdatedAt":   TorrentContentOrderByUpdatedAt,
	"updatedat":   TorrentContentOrderByUpdatedAt,
	"Size":        TorrentContentOrderBySize,
	"size":        TorrentContentOrderBySize,
	"Files":       TorrentContentOrderByFiles,
	"files":       TorrentContentOrderByFiles,
	"Seeders":     TorrentContentOrderBySeeders,
	"seeders":     TorrentContentOrderBySeeders,
	"Leechers":    TorrentContentOrderByLeechers,
	"leechers":    TorrentContentOrderByLeechers,
	"Name":        TorrentContentOrderByName,
	"name":        TorrentContentOrderByName,
	"InfoHash":    TorrentContentOrderByInfoHash,
	"infohash":    TorrentContentOrderByInfoHash,
}

// ParseTorrentContentOrderBy attempts to convert a string to a TorrentContentOrderBy.
func ParseTorrentContentOrderBy(name string) (TorrentContentOrderBy, error) {
	if x, ok := _TorrentContentOrderByValue[name]; ok {
		return x, nil
	}
	// Case insensitive parse, do a separate lookup to prevent unnecessary cost of lowercasing a string if we don't need to.
	if x, ok := _TorrentContentOrderByValue[strings.ToLower(name)]; ok {
		return x, nil
	}
	return TorrentContentOrderBy(""), fmt.Errorf("%s is %w", name, ErrInvalidTorrentContentOrderBy)
}

// MarshalText implements the text marshaller method.
func (x TorrentContentOrderBy) MarshalText() ([]byte, error) {
	return []byte(string(x)), nil
}

// UnmarshalText implements the text unmarshaller method.
func (x *TorrentContentOrderBy) UnmarshalText(text []byte) error {
	tmp, err := ParseTorrentContentOrderBy(string(text))
	if err != nil {
		return err
	}
	*x = tmp
	return nil
}

var errTorrentContentOrderByNilPtr = errors.New("value pointer is nil") // one per type for package clashes

// Scan implements the Scanner interface.
func (x *TorrentContentOrderBy) Scan(value interface{}) (err error) {
	if value == nil {
		*x = TorrentContentOrderBy("")
		return
	}

	// A wider range of scannable types.
	// driver.Value values at the top of the list for expediency
	switch v := value.(type) {
	case string:
		*x, err = ParseTorrentContentOrderBy(v)
	case []byte:
		*x, err = ParseTorrentContentOrderBy(string(v))
	case TorrentContentOrderBy:
		*x = v
	case *TorrentContentOrderBy:
		if v == nil {
			return errTorrentContentOrderByNilPtr
		}
		*x = *v
	case *string:
		if v == nil {
			return errTorrentContentOrderByNilPtr
		}
		*x, err = ParseTorrentContentOrderBy(*v)
	default:
		return errors.New("invalid type for TorrentContentOrderBy")
	}

	return
}

// Value implements the driver Valuer interface.
func (x TorrentContentOrderBy) Value() (driver.Value, error) {
	return x.String(), nil
}

type NullTorrentContentOrderBy struct {
	TorrentContentOrderBy TorrentContentOrderBy
	Valid                 bool
	Set                   bool
}

func NewNullTorrentContentOrderBy(val interface{}) (x NullTorrentContentOrderBy) {
	err := x.Scan(val) // yes, we ignore this error, it will just be an invalid value.
	_ = err            // make any errcheck linters happy
	return
}

// Scan implements the Scanner interface.
func (x *NullTorrentContentOrderBy) Scan(value interface{}) (err error) {
	if value == nil {
		x.TorrentContentOrderBy, x.Valid = TorrentContentOrderBy(""), false
		return
	}

	err = x.TorrentContentOrderBy.Scan(value)
	x.Valid = (err == nil)
	return
}

// Value implements the driver Valuer interface.
func (x NullTorrentContentOrderBy) Value() (driver.Value, error) {
	if !x.Valid {
		return nil, nil
	}
	return x.TorrentContentOrderBy.String(), nil
}

// MarshalJSON correctly serializes a NullTorrentContentOrderBy to JSON.
func (n NullTorrentContentOrderBy) MarshalJSON() ([]byte, error) {
	const nullStr = "null"
	if n.Valid {
		return json.Marshal(n.TorrentContentOrderBy)
	}
	return []byte(nullStr), nil
}

// UnmarshalJSON correctly deserializes a NullTorrentContentOrderBy from JSON.
func (n *NullTorrentContentOrderBy) UnmarshalJSON(b []byte) error {
	n.Set = true
	var x interface{}
	err := json.Unmarshal(b, &x)
	if err != nil {
		return err
	}
	err = n.Scan(x)
	return err
}