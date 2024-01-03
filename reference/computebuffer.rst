.. _api_ComputeBuffer:

ComputeBuffer Class
===================

Inherited: :doc:`Resource<api_Resource>`

.. _api_ComputeBuffer_description:

Description
-----------

The ComputeBuffer class provides functionality to manage and manipulate data buffers used in compute shaders. The count method retrieves the number of elements, stride gets and sets the stride of the buffer, and data gets the current data stored in the buffer. The setData method allows updating the buffer data and marks the buffer as dirty.



.. _api_ComputeBuffer_public:

Public Methods
--------------

+----------------------------------+--------------------------------------------------------------------+
|                              int | :ref:`count<api_ComputeBuffer_count>` () const                     |
+----------------------------------+--------------------------------------------------------------------+
|  :ref:`ByteArray<api_ByteArray>` | :ref:`data<api_ComputeBuffer_data>` () const                       |
+----------------------------------+--------------------------------------------------------------------+
|                             void | :ref:`setData<api_ComputeBuffer_setData>` (const ByteArray & data) |
+----------------------------------+--------------------------------------------------------------------+
|                             void | :ref:`setStride<api_ComputeBuffer_setStride>` (int  stride)        |
+----------------------------------+--------------------------------------------------------------------+
|                              int | :ref:`stride<api_ComputeBuffer_stride>` () const                   |
+----------------------------------+--------------------------------------------------------------------+



.. _api_ComputeBuffer_static:

Static Methods
--------------

None

.. _api_ComputeBuffer_methods:

Methods Description
-------------------

.. _api_ComputeBuffer_count:

 int **ComputeBuffer::count** () const

Gets the number of elements in the compute buffer.

----

.. _api_ComputeBuffer_data:

 :ref:`ByteArray<api_ByteArray>` **ComputeBuffer::data** () const

Gets the data stored in the compute buffer.

**See also** setData().

----

.. _api_ComputeBuffer_setData:

 void **ComputeBuffer::setData** (:ref:`ByteArray<api_ByteArray>` & *data*)

Sets the *data* of the compute buffer.

**Note:** This method updates the buffer *data* and marks it as dirty.

**See also** *data*().

----

.. _api_ComputeBuffer_setStride:

 void **ComputeBuffer::setStride** (int  *stride*)

Sets the *stride* of the compute buffer.

**See also** *stride*().

----

.. _api_ComputeBuffer_stride:

 int **ComputeBuffer::stride** () const

Returns stride, representing the size of a single element in the buffer.

**See also** setStride().


