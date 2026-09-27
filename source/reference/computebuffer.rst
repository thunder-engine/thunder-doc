.. _api_ComputeBuffer:

ComputeBuffer
=============

Inherited: :ref:`Resource<api_Resource>`

.. _api_ComputeBuffer_description:

Description
-----------

The ComputeBuffer class provides functionality to manage and manipulate data buffers used in compute shaders. The count method retrieves the number of elements, stride gets and sets the stride of the buffer, and data gets the current data stored in the buffer. The setData method allows updating the buffer data and marks the buffer as dirty.



.. _api_ComputeBuffer_public:

Public Methods
--------------

+------------+---------------------------------------------------------------------+
|   uint32_t | :ref:`count<api_ComputeBuffer_1632bce0>` () const                   |
+------------+---------------------------------------------------------------------+
|  ByteArray | :ref:`data<api_ComputeBuffer_3b915f0d>` () const                    |
+------------+---------------------------------------------------------------------+
|       void | :ref:`setData<api_ComputeBuffer_53210e6c>` (const ByteArray & data) |
+------------+---------------------------------------------------------------------+
|       void | :ref:`setStride<api_ComputeBuffer_150b367e>` (uint32_t  stride)     |
+------------+---------------------------------------------------------------------+
|   uint32_t | :ref:`stride<api_ComputeBuffer_abde3145>` () const                  |
+------------+---------------------------------------------------------------------+



.. _api_ComputeBuffer_static:

Static Methods
--------------

None

.. _api_ComputeBuffer_methods:

Methods Description
-------------------

.. _api_ComputeBuffer_1632bce0:

 uint32_t **ComputeBuffer::count** () const

Gets the number of elements in the compute buffer.

----

.. _api_ComputeBuffer_3b915f0d:

 ByteArray **ComputeBuffer::data** () const

Gets the data stored in the compute buffer.

**See also** setData().

----

.. _api_ComputeBuffer_53210e6c:

 void **ComputeBuffer::setData** (ByteArray & *data*)

Sets the *data* of the compute buffer.


**Note:** This method updates the buffer *data* and marks it as dirty.


**See also** data().

----

.. _api_ComputeBuffer_150b367e:

 void **ComputeBuffer::setStride** (uint32_t  *stride*)

Sets the *stride* of the compute buffer.

**See also** stride().

----

.. _api_ComputeBuffer_abde3145:

 uint32_t **ComputeBuffer::stride** () const

Returns stride, representing the size of a single element in the buffer.

**See also** setStride().


