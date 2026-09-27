.. _api_TString:

TString
=======

Inherited: None

.. _api_TString_description:

Description
-----------



.. _api_TString_public:

Public Methods
--------------

+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_c167e584>` ()                                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_5e70f8a9>` (const ByteArray & array)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_843f59d6>` (const std::string & str)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_187bf94d>` (const char * str)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_07d3452e>` (int  n, const char  ch)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_d2789f16>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_307e95a4>` (const std::string & str)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_60d9bc31>` (const char * str)                                                                                                                      |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_b2615874>` (const char  ch, int  n)                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_b3c8d4a6>` (const TString & arg1) const                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_c5e0d29a>` (const TString & arg1, const TString & arg2) const                                                                                         |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_deca74b5>` (const TString & arg1, const TString & arg2, const TString & arg3) const                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_628049e3>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4) const                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_3a98ce2b>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5) const                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_51ad8cfb>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5, const TString & arg6) const |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`at<api_TString_c80be34a>` (int  position) const                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`back<api_TString_fdb57a0e>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`clear<api_TString_2358149b>` ()                                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`compare<api_TString_21ebcf4d>` (const TString & other) const                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`contains<api_TString_cd9f1630>` (const TString & str) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     const char | :ref:`data<api_TString_4c06ae32>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`front<api_TString_2a683fc9>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_c567f421>` (const TString & str, uint32_t  offset = 0) const                                                                                      |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_fab31258>` (const char  ch, uint32_t  offset = 0) const                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEmpty<api_TString_6f1be375>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_a09be146>` (const TString & str) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_08feba72>` (const char  ch) const                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`left<api_TString_9a627cd8>` (int  n) const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`length<api_TString_e1f49780>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`mid<api_TString_132d6e7a>` (int  position, int  n) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_95ad3fc8>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_1cb49280>` (const char  ch)                                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeFirst<api_TString_cde3a52f>` ()                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeLast<api_TString_f6a4d8e3>` ()                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_3bfeca68>` (const TString & before, const TString & after)                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_97a24ed6>` (const char  before, const char  after)                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`right<api_TString_d78f61ca>` (int  n) const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`simplified<api_TString_91f7650e>` () const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`size<api_TString_805cf361>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_4a6872f0>` (const char  sep) const                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_e950fdb4>` (const TString & sep) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`startsWith<api_TString_e7a5248f>` (const TString & str) const                                                                                                         |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                      ByteArray | :ref:`toByteArray<api_TString_c65b130a>` () const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                          float | :ref:`toFloat<api_TString_a3dec860>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`toInt<api_TString_16c2f58e>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                         size_t | :ref:`toLong<api_TString_876bc1d9>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toLower<api_TString_6f4c7b13>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|              const std::string | :ref:`toStdString<api_TString_a2fed461>` () const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   std::wstring | :ref:`toStdWString<api_TString_cb4f0a81>` () const                                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toUpper<api_TString_9d5618af>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                 std::u32string | :ref:`toUtf32<api_TString_130598c6>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`trimmed<api_TString_1a8902cd>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_TString_63c7958b>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_dbfa0713>` (const TString & other) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_ef689ca3>` (const std::string & other) const                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_4a78be3d>` (const char * other) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_6ae59287>` (char  ch) const                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_70f925a4>` (const TString & other)                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_27a9b04f>` (const std::string & str)                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_d0f7ca2b>` (const char * str)                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_263b97fc>` (const char  ch)                                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator\<<api_TString_a5963df1>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_TString_9fa01cd4>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`operator[]<api_TString_6e3a982b>` (int  position)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_TString_static:

Static Methods
--------------

+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromByteArray<api_TString_9e1a5dbf>` (const ByteArray & data, bool  lineBreaks = false) |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromUtf32<api_TString_b928ce1f>` (const std::u32string & in)                            |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWc32<api_TString_6a0b3c78>` (uint32_t  unicode)                                     |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWString<api_TString_23968bd7>` (const std::wstring & in)                            |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`join<api_TString_8d62190c>` (const StringList & list, const char * separator)           |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_27061c83>` (long long  in)                                           |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_b547a6d2>` (int  in)                                                 |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_bc0d4f72>` (float  in)                                               |
+------------------------------+-----------------------------------------------------------------------------------------------+

.. _api_TString_methods:

Methods Description
-------------------

.. _api_TString_c167e584:

**TString::TString** ()

Constructs an empty string.

----

.. _api_TString_5e70f8a9:

**TString::TString** (ByteArray & *array*)

Constructs a string from a byte array.

----

.. _api_TString_843f59d6:

**TString::TString** (std::string & *str*)

Constructs a string from a standard string.

----

.. _api_TString_187bf94d:

**TString::TString** (char * *str*)

Constructs a string from a C-style null-terminated string.

----

.. _api_TString_07d3452e:

**TString::TString** (int  *n*, char  *ch*)

Constructs a string of the given *n* size with every character set to ch.

----

.. _api_TString_d2789f16:

 :ref:`TString<api_TString>` & **TString::append** (:ref:`TString<api_TString>` & *str*)

Appends the string *str* onto the end of this string.

----

.. _api_TString_307e95a4:

 :ref:`TString<api_TString>` & **TString::append** (std::string & *str*)

Appends the standard string *str* onto the end of this string.

----

.. _api_TString_60d9bc31:

 :ref:`TString<api_TString>` & **TString::append** (char * *str*)

Appends the string *str* to this string. The given const char pointer is converted to Unicode.

----

.. _api_TString_b2615874:

 :ref:`TString<api_TString>` & **TString::append** (char  *ch*, int  *n*)

Appends a string of the given *n* size with every character set to ch.

----

.. _api_TString_b3c8d4a6:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*) const

Returns a copy of this string with the lowest-numbered place-marker %1 replaced by string arg1.

----

.. _api_TString_c5e0d29a:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2 replaced by string *arg1* and arg2.

----

.. _api_TString_deca74b5:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3 replaced by string arg1, *arg2* and arg3.

----

.. _api_TString_628049e3:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4 replaced by string arg1, arg2, *arg3* and arg4.

----

.. _api_TString_3a98ce2b:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5 replaced by string arg1, arg2, arg3, *arg4* and arg5.

----

.. _api_TString_51ad8cfb:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*, :ref:`TString<api_TString>` & *arg6*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5, %6 replaced by string arg1, arg2, arg3, arg4, *arg5* and arg6.

----

.. _api_TString_c80be34a:

 char **TString::at** (int  *position*) const

Returns the character at the given index *position* in the string.

----

.. _api_TString_fdb57a0e:

 char **TString::back** () const

Returns the last character in the string.

----

.. _api_TString_2358149b:

 void **TString::clear** ()

Clears the contents of the string and makes it empty.

----

.. _api_TString_21ebcf4d:

 int **TString::compare** (:ref:`TString<api_TString>` & *other*) const

Compares this string with *other* string and returns a negative integer if this is less than other, a positive integer if it is greater than other, and zero if they are equal.

----

.. _api_TString_cd9f1630:

 bool **TString::contains** (:ref:`TString<api_TString>` & *str*) const

Returns true if this string contains an occurrence of the string str; otherwise returns false.

----

.. _api_TString_4c06ae32:

const char **TString::data** () const

Returns a pointer to the data stored in the TString.

----

.. _api_TString_9e1a5dbf:

 :ref:`TString<api_TString>`  **TString::fromByteArray** (ByteArray & *data*, bool  *lineBreaks* = false)

Encodes a ByteArray *data* into a Base64 string. If *lineBreaks* is true, line breaks are added every 76 characters.

**See also** toByteArray().

----

.. _api_TString_b928ce1f:

 :ref:`TString<api_TString>`  **TString::fromUtf32** (std::u32string & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* UTF-32.

----

.. _api_TString_6a0b3c78:

 :ref:`TString<api_TString>`  **TString::fromWc32** (uint32_t  *unicode*)

Returns a TString initialized with the first size characters of the Unicode string *unicode* (encoded as UTF-32).

----

.. _api_TString_23968bd7:

 :ref:`TString<api_TString>`  **TString::fromWString** (std::wstring & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* utf16 if the size of wchar_t is 2 bytes (e.g. on windows).

----

.. _api_TString_2a683fc9:

 char **TString::front** () const

Returns a reference to the first character in the string.

----

.. _api_TString_c567f421:

 int **TString::indexOf** (:ref:`TString<api_TString>` & *str*, uint32_t  *offset* = 0) const

Returns the index position of the first occurrence of the string *str* at specific *offset* in this string. Returns -1 if *str* is not found.

----

.. _api_TString_fab31258:

 int **TString::indexOf** (char  *ch*, uint32_t  *offset* = 0) const

Returns the index position of the first occurrence of the character *ch* in this string. Returns -1 if *ch* is not found.

----

.. _api_TString_6f1be375:

 bool **TString::isEmpty** () const

Returns true if string is empty; otherwise returns false.

----

.. _api_TString_8d62190c:

 :ref:`TString<api_TString>`  **TString::join** (StringList & *list*, char * *separator*)

Joins all the string *list* strings into a single string with each element separated by the given *separator* (which can be an empty string).

----

.. _api_TString_a09be146:

 int **TString::lastIndexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the last occurrence of the string *str* in this string, searching backward from index position from.

----

.. _api_TString_08feba72:

 int **TString::lastIndexOf** (char  *ch*) const

Returns the index position of the last occurrence of the character *ch* in this string, searching backward from index position from.

----

.. _api_TString_9a627cd8:

 :ref:`TString<api_TString>`  **TString::left** (int  *n*) const

Returns a substring that contains the *n* leftmost characters of this string.

----

.. _api_TString_e1f49780:

 int **TString::length** () const

Returns the number of characters in this string.

----

.. _api_TString_132d6e7a:

 :ref:`TString<api_TString>`  **TString::mid** (int  *position*, int  *n*) const

Returns a string that contains *n* characters of this string, starting at the specified *position* index up to, but not including.

----

.. _api_TString_27061c83:

 :ref:`TString<api_TString>`  **TString::number** (long  *in*)

Returns a string representing the long integer number in.

----

.. _api_TString_b547a6d2:

 :ref:`TString<api_TString>`  **TString::number** (int  *in*)

Returns a string representing the integer number in.

----

.. _api_TString_bc0d4f72:

 :ref:`TString<api_TString>`  **TString::number** (float  *in*)

Returns a string representing the floating-point number in.

----

.. _api_TString_95ad3fc8:

 :ref:`TString<api_TString>` & **TString::remove** (:ref:`TString<api_TString>` & *str*)

Removes every occurrence of the given *str* string in this string, and returns a reference to this string.

----

.. _api_TString_1cb49280:

 :ref:`TString<api_TString>` & **TString::remove** (char  *ch*)

Removes every occurrence of the character *ch* in this string, and returns a reference to this string.

----

.. _api_TString_cde3a52f:

 :ref:`TString<api_TString>` & **TString::removeFirst** ()

Removes the first character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_f6a4d8e3:

 :ref:`TString<api_TString>` & **TString::removeLast** ()

Removes the last character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_3bfeca68:

 :ref:`TString<api_TString>` & **TString::replace** (:ref:`TString<api_TString>` & *before*, :ref:`TString<api_TString>` & *after*)

Replaces every occurrence of the string *before* with the string *after* and returns a reference to this string.

----

.. _api_TString_97a24ed6:

 :ref:`TString<api_TString>` & **TString::replace** (char  *before*, char  *after*)

Replaces every occurrence of the character *before* with the character *after* and returns a reference to this string.

----

.. _api_TString_d78f61ca:

 :ref:`TString<api_TString>`  **TString::right** (int  *n*) const

Returns a substring that contains the *n* rightmost characters of the string.

----

.. _api_TString_91f7650e:

 :ref:`TString<api_TString>`  **TString::simplified** () const

Returns a string that has whitespace removed from the start and the end, and that has each sequence of internal whitespace replaced with a single space.

----

.. _api_TString_805cf361:

 int **TString::size** () const

Returns the number of characters in this string.

----

.. _api_TString_4a6872f0:

 StringList **TString::split** (char  *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_e950fdb4:

 StringList **TString::split** (:ref:`TString<api_TString>` & *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_e7a5248f:

 bool **TString::startsWith** (:ref:`TString<api_TString>` & *str*) const

Returns true if this string starts with the string str; otherwise returns false. The comparison is case-sensitive.

----

.. _api_TString_c65b130a:

 ByteArray **TString::toByteArray** () const

Decodes a Base64 string into a ByteArray.

**See also** fromByteArray().

----

.. _api_TString_a3dec860:

 float **TString::toFloat** () const

Returns the string converted to a float value.

----

.. _api_TString_16c2f58e:

 int **TString::toInt** () const

Returns the string converted to an int. Returns 0 if the conversion fails.

----

.. _api_TString_876bc1d9:

 size_t **TString::toLong** () const

Returns the string converted to a long. Returns 0 if the conversion fails.

----

.. _api_TString_6f4c7b13:

 :ref:`TString<api_TString>`  **TString::toLower** () const

Returns a lowercase copy of the string.

----

.. _api_TString_a2fed461:

const std::string **TString::toStdString** () const

Returns a std::string object with the data contained in this TString.

----

.. _api_TString_cb4f0a81:

 std::wstring **TString::toStdWString** () const

Returns a std::wstring object with the data contained in this TString.

----

.. _api_TString_9d5618af:

 :ref:`TString<api_TString>`  **TString::toUpper** () const

Returns an uppercase copy of the string.

----

.. _api_TString_130598c6:

 std::u32string **TString::toUtf32** () const

Returns a std::u32string object with the data contained in this TString.

----

.. _api_TString_1a8902cd:

 :ref:`TString<api_TString>`  **TString::trimmed** () const

Returns a string that has whitespace removed from the start and the end. This includes the ASCII characters '\t', '\n', '\v', '\f', '\r', and ' '.

----

.. _api_TString_63c7958b:

 bool **TString::operator!=** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is NOT equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_dbfa0713:

 :ref:`TString<api_TString>`  **TString::operator+** (:ref:`TString<api_TString>` & *other*) const

Returns a string that is the result of concatenating this string and other.

----

.. _api_TString_ef689ca3:

 :ref:`TString<api_TString>`  **TString::operator+** (std::string & *other*) const

Returns a string that is the result of concatenating this string and *other* standard string.

----

.. _api_TString_4a78be3d:

 :ref:`TString<api_TString>`  **TString::operator+** (char * *other*) const

Returns a string that is the result of concatenating this string and null terminated *other* charcter string.

----

.. _api_TString_6ae59287:

 :ref:`TString<api_TString>`  **TString::operator+** (char  *ch*) const

Returns a string that is the result of concatenating this string and *ch* character.

----

.. _api_TString_70f925a4:

 :ref:`TString<api_TString>` & **TString::operator+=** (:ref:`TString<api_TString>` & *other*)

Appends the string *other* onto the end of this string and returns a reference to this string.

----

.. _api_TString_27a9b04f:

 :ref:`TString<api_TString>` & **TString::operator+=** (std::string & *str*)

Appends the standard string *str* to this string.

----

.. _api_TString_d0f7ca2b:

 :ref:`TString<api_TString>` & **TString::operator+=** (char * *str*)

Appends the string *str* to this string. The const char pointer is converted to Unicode using the fromUtf8() function.

----

.. _api_TString_263b97fc:

 :ref:`TString<api_TString>` & **TString::operator+=** (char  *ch*)

Appends the character *ch* to this string.

----

.. _api_TString_a5963df1:

 bool **TString::operator<** (:ref:`TString<api_TString>` & *other*) const

Returns true if this is lexically less than other; otherwise returns false.

----

.. _api_TString_9fa01cd4:

 bool **TString::operator==** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_6e3a982b:

 char **TString::operator[]** (int  *position*)

Returns the character at the specified *position* in the string as a modifiable reference.


